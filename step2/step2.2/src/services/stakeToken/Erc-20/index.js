import { ethers } from 'ethers';
import {
  getStakeTokenAbi,
  getERC20TokenAbi,
  getContract,
  getWallet,
  enoughBalanceToStake,
  erc20TokenApprovedStatus,
  getStakingAmount,
  pendingErc20WithDrawAmount,
} from '../../../common/contracts/index.js';
import { validateListToken } from '../../../common/validations/validateToken.js';
import { validatePrivateKey } from '../../../common/validations/validatePrivateKey.js';
import {
  BadRequestError,
  ExceedStakedAmountError,
  NoTokenInPendingWithDraw,
  ValidationError,
} from '../../../common/exeptions/index.js';
import MessageConstant from '../../../common/constants/message.constant.js';

const validationStakeInput = (erc20Token, stakeToken, privateKey, amount) => {
  try {
    // Validate isAddress format
    validateListToken({ erc20Token, stakeToken });
    // Validate private key
    validatePrivateKey(privateKey);
    // Validate amount
    if (isNaN(Number(amount))) {
      throw new ValidationError(MessageConstant.AMOUNT_IS_NOT_NUMBER);
    }
  } catch (error) {
    throw error;
  }
};

export const stake = async (erc20Token, stakeToken, privateKey, amount) => {
  try {
    // Validate input
    validationStakeInput(erc20Token, stakeToken, privateKey, amount);
    // Connect to Wallet using private key
    const signer = getWallet(privateKey);
    // Create instance of Erc-20 contract
    const erc20Contract = getContract(erc20Token, getERC20TokenAbi(), signer);

    // Check balance of wallet
    const owner = await signer.getAddress();
    await enoughBalanceToStake(erc20Contract, owner);

    // If valid, let check approve token
    await erc20TokenApprovedStatus(erc20Contract, owner, stakeToken, amount);

    // If valid, stake token
    try {
      const stakeErc20Contract = getContract(
        stakeToken,
        getStakeTokenAbi(),
        signer,
      );
      const result = await stakeErc20Contract.stakeERC20(
        ethers.parseEther(String(amount)),
      );
      return result;
    } catch (error) {
      throw new BadRequestError(MessageConstant.BAD_REQUEST);
    }
  } catch (error) {
    throw error;
  }
};

const validateUnStakeInput = (stakeToken, privateKey, amount) => {
  try {
    // Validate isAddress format
    validateListToken({ stakeToken });
    // Validate private key
    validatePrivateKey(privateKey);
    // Validate amount
    if (isNaN(Number(amount))) {
      throw new ValidationError(MessageConstant.AMOUNT_IS_NOT_NUMBER);
    }
  } catch (error) {
    throw error;
  }
};
export const unstake = async (stakeToken, privateKey, amount) => {
  try {
    // Validate Token
    validateUnStakeInput(stakeToken, privateKey, amount);

    // Connect to Wallet using private key
    const signer = getWallet(privateKey);
    const owner = await signer.getAddress();

    // Get stake amount
    const stakeContract = getContract(stakeToken, getStakeTokenAbi(), signer);
    const stakeAmount = await getStakingAmount(stakeContract, owner);

    if (stakeAmount < ethers.parseEther(String(amount))) {
      throw new ExceedStakedAmountError(MessageConstant.EXCEED_STAKED_AMOUNT);
    }
    // If valid amount
    try {
      const result = await stakeContract.unstakeERC20(
        ethers.parseEther(String(amount)),
      );
      return result;
    } catch (error) {
      throw new BadRequestError(MessageConstant.BAD_REQUEST);
    }
  } catch (error) {
    throw error;
  }
};
// unstake();

const validateInputWithDraw = (stakeToken, privateKey) => {
  try {
    // Validate isAddress format
    validateListToken({ stakeToken });
    // Validate private key
    validatePrivateKey(privateKey);
  } catch (error) {
    throw error;
  }
};
export const withdraw = async (stakeToken, privateKey) => {
  try {
    // Validate Input first
    validateInputWithDraw(stakeToken, privateKey);

    // Connect to Wallet using private key
    const signer = getWallet(privateKey);
    const owner = await signer.getAddress();

    // Get stake amount
    const stakeContract = getContract(stakeToken, getStakeTokenAbi(), signer);

    // Check pending
    const pendingAmount = await pendingErc20WithDrawAmount(
      stakeContract,
      owner,
    );

    if (!pendingAmount)
      throw new NoTokenInPendingWithDraw(
        MessageConstant.NO_TOKEN_IN_PENDING_WITHDRAW,
      );

    try {
      const result = await stakeContract.withdrawERC20();
      return result;
    } catch (error) {
      throw new BadRequestError(MessageConstant.BAD_REQUEST);
    }
  } catch (error) {
    throw error;
  }
};

import {
  getStakeTokenAbi,
  getContract,
  getWallet,
  enoughBalanceToStake,
  getNftTokenAbi,
  nftTokenApprovedStatus,
  isOwnerOfNftToken,
  getNftStakings,
  pendingErc721WithDraw,
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

const validationStakeInput = (nftToken, stakeToken, privateKey, tokenId) => {
  try {
    // Validate isAddress format
    validateListToken({ nftToken, stakeToken });
    // Validate private key
    validatePrivateKey(privateKey);
    // Validate tokenId
    if (!tokenId.trim() || isNaN(Number(tokenId))) {
      throw new ValidationError(MessageConstant.INVALID_TOKEN_ID);
    }
  } catch (error) {
    throw error;
  }
};

export const stake = async (nftToken, stakeToken, privateKey, tokenId) => {
  try {
    // Validate input
    validationStakeInput(nftToken, stakeToken, privateKey, tokenId);
    // Connect to Wallet using private key
    const signer = getWallet(privateKey);
    // Create instance of Erc-20 contract
    const nftContract = getContract(nftToken, getNftTokenAbi(), signer);

    // Check balance of wallet
    const owner = await signer.getAddress();
    await enoughBalanceToStake(nftContract, owner);

    // If valid, check Token Id existed
    await isOwnerOfNftToken(nftContract, owner, tokenId);
    // If valid, let check approve token
    await nftTokenApprovedStatus(nftContract, stakeToken, tokenId);

    // If valid, stake token
    try {
      const stakeNftContract = getContract(
        stakeToken,
        getStakeTokenAbi(),
        signer,
      );
      const result = await stakeNftContract.stakeERC721(tokenId);
      return result;
    } catch (error) {
      throw new BadRequestError(MessageConstant.BAD_REQUEST);
    }
  } catch (error) {
    throw error;
  }
};

const validateUnStakeInput = (stakeToken, privateKey, tokenId) => {
  try {
    // Validate isAddress format
    validateListToken({ stakeToken });
    // Validate private key
    validatePrivateKey(privateKey);
    // Validate token id
    if (!tokenId.trim() || isNaN(Number(tokenId))) {
      throw new ValidationError(MessageConstant.INVALID_TOKEN_ID);
    }
  } catch (error) {
    throw error;
  }
};
export const unstake = async (stakeToken, privateKey, tokenId) => {
  try {
    // Validate Token
    validateUnStakeInput(stakeToken, privateKey, tokenId);

    // Connect to Wallet using private key
    const signer = getWallet(privateKey);
    const owner = await signer.getAddress();

    // Get stake amount
    const stakeContract = getContract(stakeToken, getStakeTokenAbi(), signer);
    const tokenStakings = await getNftStakings(stakeContract, owner);

    if (!tokenStakings.includes(BigInt(tokenId))) {
      throw new ExceedStakedAmountError(MessageConstant.NFT_IS_NOT_STAKED);
    }
    // If token id existed
    try {
      const result = await stakeContract.unstakeERC721(tokenId);
      return result;
    } catch (error) {
      throw new BadRequestError(MessageConstant.BAD_REQUEST);
    }
  } catch (error) {
    throw error;
  }
};

const validateInputWithDraw = (stakeToken, privateKey, tokenId) => {
  try {
    // Validate isAddress format
    validateListToken({ stakeToken });
    // Validate private key
    validatePrivateKey(privateKey);
    // Validate token id
    if (!tokenId.trim() || isNaN(Number(tokenId))) {
      throw new ValidationError(MessageConstant.INVALID_TOKEN_ID);
    }
  } catch (error) {
    throw error;
  }
};

export const withdraw = async (stakeToken, privateKey, tokenId) => {
  try {
    // Validate Input first
    validateInputWithDraw(stakeToken, privateKey, tokenId);

    // Connect to Wallet using private key
    const signer = getWallet(privateKey);
    const owner = await signer.getAddress();

    // Get stake amount
    const stakeContract = getContract(stakeToken, getStakeTokenAbi(), signer);

    // Check pending
    const listPending = await pendingErc721WithDraw(stakeContract, owner);

    if (!listPending || !listPending.length) {
      throw new NoTokenInPendingWithDraw(
        MessageConstant.NO_TOKEN_IN_PENDING_WITHDRAW,
      );
    }
    // Find token Id in pending withdraw
    const checkTokenIdExisted = listPending.find(
      (element) => element.tokenId === BigInt(tokenId),
    );

    if (!checkTokenIdExisted)
      throw new NoTokenInPendingWithDraw(
        MessageConstant.NO_TOKEN_IN_PENDING_WITHDRAW,
      );

    try {
      const result = await stakeContract.withdrawERC721(tokenId);
      return result;
    } catch (error) {
      throw new BadRequestError(MessageConstant.BAD_REQUEST);
    }
  } catch (error) {
    throw error;
  }
};

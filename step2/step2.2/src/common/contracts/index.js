import { ethers } from 'ethers';
import stakeTokenAbi from '../abi/stakeTokenAbi.json' assert { type: 'json' };
import erc20TokenAbi from '../abi/erc20TokenAbi.json' assert { type: 'json' };
import nftTokenAbi from '../abi/nftTokenAbi.json' assert { type: 'json' };
import envConstant from '../constants/env.constant.js';
import {
  BadRequestError,
  BalanceExceedError,
  NotApprovedYetError,
  NotStakedYetError,
  ValidationError,
} from '../exeptions/index.js';
import MessageConstant from '../constants/message.constant.js';

export const getWallet = (privateKey) => {
  const wallet = new ethers.Wallet(privateKey, getProvider());
  return wallet;
};

export const getProvider = () => {
  const rpcUrl = envConstant.SEPOLIA_RPC_URL;
  return new ethers.JsonRpcProvider(rpcUrl);
};

export const getStakeTokenAbi = () => {
  return stakeTokenAbi;
};

export const getERC20TokenAbi = () => {
  return erc20TokenAbi;
};

export const getNftTokenAbi = () => {
  return nftTokenAbi;
};

export const getContract = (contractToken, abi, signer) => {
  const contract = new ethers.Contract(contractToken, abi, signer);
  return contract;
};

export const enoughBalanceToStake = async (contract, ownerAddress) => {
  try {
    const balance = await contract.balanceOf(ownerAddress);
    if (!balance || balance <= 0) {
      throw new BalanceExceedError(MessageConstant.EXCEED_BALANCE);
    }

    return true;
  } catch (error) {
    if (error instanceof BalanceExceedError) throw error;
    throw new BadRequestError(MessageConstant.BAD_REQUEST);
  }
};

export const erc20TokenApprovedStatus = async (
  erc20Contract,
  owner,
  spender,
  amount,
) => {
  try {
    const allowance = await erc20Contract.allowance(owner, spender);
    if (!allowance) {
      throw new NotApprovedYetError(MessageConstant.NOT_APPROVED_YET);
    }

    if (allowance < ethers.parseEther(String(amount))) {
      throw new BalanceExceedError(MessageConstant.EXCEED_BALANCE);
    }

    return true;
  } catch (error) {
    if (
      error instanceof NotApprovedYetError ||
      error instanceof BalanceExceedError
    ) {
      throw error;
    }

    throw new BadRequestError(MessageConstant.BAD_REQUEST);
  }
};

export const nftTokenApprovedStatus = async (nftContract, spender, tokenId) => {
  try {
    const spenderAddress = await nftContract.getApproved(tokenId);
    console.log(spenderAddress);
    if (!spenderAddress || spenderAddress !== spender) {
      throw new NotApprovedYetError(MessageConstant.NOT_APPROVED_YET);
    }

    return true;
  } catch (error) {
    if (error instanceof NotApprovedYetError) {
      throw error;
    }

    throw new BadRequestError(MessageConstant.BAD_REQUEST);
  }
};

export const getStakingAmount = async (stakeContract, owner) => {
  try {
    const stakeAmount = await stakeContract.staking(owner);
    if (!stakeAmount) {
      throw new NotStakedYetError(MessageConstant.NOT_STAKED_YET);
    }
    return stakeAmount;
  } catch (error) {
    if (error instanceof NotStakedYetError) throw error;
    throw new BadRequestError(MessageConstant.BAD_REQUEST);
  }
};

export const getNftStakings = async (stakeContract, ownerAddress) => {
  try {
    const tokenStakings = await stakeContract.getnftStakings(ownerAddress);
    return tokenStakings;
  } catch (error) {
    throw new BadRequestError(MessageConstant.BAD_REQUEST);
  }
};

export const pendingErc20WithDrawAmount = async (stakeContract, owner) => {
  try {
    const pendingWithDraw = await stakeContract.pendingERC20Withdrawals(owner);
    return pendingWithDraw.amount;
  } catch (error) {
    throw new BadRequestError(MessageConstant.BAD_REQUEST);
  }
};

export const pendingErc721WithDraw = async (stakeContract, owner) => {
  try {
    const pendingWithDraw = await stakeContract.getPendingERC721Withdrawals(
      owner,
    );
    return pendingWithDraw;
  } catch (error) {
    throw new BadRequestError(MessageConstant.BAD_REQUEST);
  }
};

export const isOwnerOfNftToken = async (nftContract, owner, tokenId) => {
  try {
    const ownerAddress = await nftContract.ownerOf(tokenId);

    if (ownerAddress !== owner) {
      throw new ValidationError(MessageConstant.TOKEN_ID_NOT_EXISTED);
    }

    return true;
  } catch (error) {
    if (error instanceof ValidationError) throw error;
    throw new BadRequestError(MessageConstant.BAD_REQUEST);
  }
};

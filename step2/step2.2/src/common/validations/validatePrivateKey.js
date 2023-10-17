import { ethers } from 'ethers';
import MessageConstant from '../constants/message.constant.js';
import { InvalidPrivateKeyError } from '../exeptions/index.js';

export const validatePrivateKey = (privateKey) => {
  try {
    if (!privateKey || !privateKey.trim()) {
      throw new InvalidPrivateKeyError(
        `${MessageConstant.MISSING_FIELD} private key`,
      );
    }
    const wallet = new ethers.Wallet(privateKey);
    if (!wallet) {
      throw new InvalidPrivateKeyError(MessageConstant.INVALID_PRIVATE_KEY);
    }
    return true;
  } catch (error) {
    throw new InvalidPrivateKeyError(MessageConstant.INVALID_PRIVATE_KEY);
  }
};

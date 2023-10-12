import { ethers } from 'ethers';
import MessageConstant from '../constants/message.constant.js';
const validatePrivateKey = (privateKey) => {
  try {
    if (!privateKey || !privateKey.trim()) {
      return `${MessageConstant.MISSING_FIELD} private key`;
    }
    const wallet = new ethers.Wallet(privateKey);
    if (wallet) {
      return true;
    }
    return MessageConstant.INVALID_PRIVATE_KEY;
  } catch (error) {
    return MessageConstant.INVALID_PRIVATE_KEY;
  }
};

export default validatePrivateKey;

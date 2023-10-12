import { ethers } from 'ethers';
import MessageConstant from '../common/constants/message.constant.js';

const signMessageWithPrivateKey = async (message, privateKey) => {
  try {
    const wallet = new ethers.Wallet(privateKey);

    const messageBytes = ethers.toUtf8Bytes(message);
    const messageHash = ethers.keccak256(messageBytes);
    const signature = await wallet.signMessage(messageHash);
    return {
      status: 'success',
      signature,
    };
  } catch (error) {
    console.error('Error signing the message:', error.message);
    return {
      status: 'error',
      message: MessageConstant.BAD_REQUEST,
    };
  }
};

export default signMessageWithPrivateKey;

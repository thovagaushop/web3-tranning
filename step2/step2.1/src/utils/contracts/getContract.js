import { ethers } from 'ethers';
import abiConstant from '../../common/constants/abi.constant.js';
import envConstant from '../../common/constants/env.constant.js';

// Create Provider instance
export const getProvider = (rpcUrl) => {
  return new ethers.JsonRpcProvider(rpcUrl);
};

export const getAbi = () => {
  return abiConstant.itsAbi;
};
// Create contract instance
export const getContract = (contractToken) => {
  const rpcUrl = envConstant.SEPOLIA_RPC_URL;
  return new ethers.Contract(contractToken, getAbi(), getProvider(rpcUrl));
};

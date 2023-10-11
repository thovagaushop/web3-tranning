import { ethers } from 'ethers';
import abiConstant from '../../common/constants/abi.constant.js';

// Create Provider instance
export const getProvider = (network) => {
  console.log(new ethers.JsonRpcProvider(network));
  return new ethers.JsonRpcProvider(network);
};

export const getAbi = () => {
  return abiConstant.itsAbi;
};
// Create contract instance
export const getContract = (contractToken, network) => {
  return new ethers.Contract(contractToken, getAbi(), getProvider(network));
};

import { ethers } from 'ethers';
import abi from '../abi/stakeTokenAbi.json' assert { type: 'json' };

export const getWallet = (walletAddress) => {
  return walletAddress;
};

export const getProvider = (network) => {
  network = 'https://sepolia.infura.io/v3/e0de27cd3bd24144a0b1b6986a05db04';
  return new ethers.JsonRpcProvider(network);
};

export const getAib = () => {
  return abi;
};

export const getContract = (contractToken, network) => {
  const provider = getProvider(network);
  const contract = new ethers.Contract(contractToken, getAib(), provider);

  return contract;
};

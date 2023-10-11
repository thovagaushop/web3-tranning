import { getContract } from '../utils/contracts/getContract.js';
import envContant from '../common/constants/env.constant.js';
import validateListToken from '../utils/validation/validateToken.js';

export const allowance = async (contractToken, owner, spender) => {
  try {
    // Validate token format
    validateListToken({ contractToken, owner, spender });

    // If valid
    const network = `https://sepolia.infura.io/v3/${envContant.SEPOLIA_RPC_ID}`;
    const contract = getContract(contractToken, network);

    return {
      allowance: (await contract.allowance(owner, spender)).toString(),
    };
  } catch (error) {
    console.log('Error when read allowance : ', error.message);
    throw error;
  }
};

export const balance = async (contractToken, account) => {
  try {
    // Validate token format
    validateListToken({ contractToken, account });

    // If valid
    const network = `https://sepolia.infura.io/v3/${envContant.SEPOLIA_RPC_ID}`;
    const contract = getContract(contractToken, network);

    return {
      balanceOf: (await contract.balanceOf(account)).toString(),
    };
  } catch (error) {
    console.log('Error when read balance : ', error.message);
    throw error;
  }
};

export const decimals = async (contractToken) => {
  try {
    // Validate token format
    validateListToken({ contractToken });

    // If valid
    const network = `https://sepolia.infura.io/v3/${envContant.SEPOLIA_RPC_ID}`;
    const contract = getContract(contractToken, network);
    return {
      decimals: (await contract.decimals()).toString(),
    };
  } catch (error) {
    console.log('Error when read decimals : ', error.message);
    throw error;
  }
};

export const name = async (contractToken) => {
  try {
    // Validate token format
    validateListToken({ contractToken });

    // If valid
    const network = `https://sepolia.infura.io/v3/${envContant.SEPOLIA_RPC_ID}`;
    const contract = getContract(contractToken, network);

    return {
      name: await contract.name(),
    };
  } catch (error) {
    console.log('Error when read name : ', error.message);
    throw error;
  }
};

export const symbol = async (contractToken) => {
  try {
    // Validate token format
    validateListToken({ contractToken });

    // If valid
    const network = `https://sepolia.infura.io/v3/${envContant.SEPOLIA_RPC_ID}`;
    const contract = getContract(contractToken, network);

    return {
      symbol: await contract.symbol(),
    };
  } catch (error) {
    console.log('Error when read symbol : ', error.message);
    throw error;
  }
};

export const totalSupply = async (contractToken) => {
  try {
    // Validate token format
    validateListToken({ contractToken });

    // If valid
    const network = `https://sepolia.infura.io/v3/${envContant.SEPOLIA_RPC_ID}`;
    const contract = getContract(contractToken, network);
    return {
      totalSupply: (await contract.totalSupply()).toString(),
    };
  } catch (error) {
    console.log('Error when read totalSupply : ', error.message);
    throw error;
  }
};

import { getContract } from '../common/contracts/getContract.js';
import envContant from '../constants/env.constant.js';

export const getData = async (contractToken, query) => {
  try {
    const network = `https://sepolia.infura.io/v3/${envContant.SEPOLIA_RPC_ID}`;
    console.log('Network : ', network);
    const contract = getContract(contractToken, network);
    let result = {};
    switch (query.type) {
      case 'allowance':
        if (!query.owner || !query.spender) {
          throw Error('Missing owner or spender address');
        }

        result = {
          allowance: (
            await contract.allowance(query.owner, query.spender)
          ).toString(),
        };
        break;
      case 'balance':
        if (!query.account) {
          throw Error('Missing account address');
        }
        result = {
          balanceOf: (await contract.balanceOf(query.account)).toString(),
        };
        break;
      case 'decimals':
        result = {
          decimals: (await contract.decimals()).toString(),
        };
        break;
      case 'name':
        result = {
          name: await contract.name(),
        };
        break;
      case 'symbol':
        result = {
          symbol: await contract.symbol(),
        };
        break;
      case 'totalSupply':
        result = {
          totalSupply: (await contract.totalSupply()).toString(),
        };
        break;
      default:
        throw Error('Type is wrong formet');
    }

    return result;
  } catch (error) {
    console.log('Error when read contract data : ', error.message);
    throw Error(error.message);
  }
};

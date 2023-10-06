import { getContract } from '../utils/contracts/getContract.js';
import envContant from '../common/constants/env.constant.js';
import { ValidationError } from '../common/exceptions/custom.exception.js';
import validateListFieldRequired from '../utils/validation/validateFieldRequired.js';
import validateListToken from '../utils/validation/validateToken.js';

export const getData = async (contractToken, query) => {
  try {
    // Validate token and query
    const { type, ...queryValidate } = query;
    console.log({ ...queryValidate, token: contractToken });
    validateListFieldRequired({ ...queryValidate, token: contractToken });
    validateListToken({ ...queryValidate, token: contractToken });

    // If valid
    const network = `https://sepolia.infura.io/v3/${envContant.SEPOLIA_RPC_ID}`;
    console.log('Network : ', network);
    const contract = getContract(contractToken, network);
    let result = {};
    switch (query.type) {
      case 'allowance':
        result = {
          allowance: (
            await contract.allowance(query.owner, query.spender)
          ).toString(),
        };
        break;
      case 'balance':
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
        throw new ValidationError('Type is wrong formet');
    }

    return result;
  } catch (error) {
    console.log('Error when read contract data : ', error.message);
    throw error;
  }
};

import { stakeOptions } from './stakeToken/index.js';
import { TYPE_SERVICE } from '../common/constants/questions.constant.js';
import { signMessageOptions } from './signMessage/index.js';

const cliController = async (options) => {
  switch (options.service) {
    case TYPE_SERVICE.SIGN_MESSAGE.value:
      return await signMessageOptions(options);
    case TYPE_SERVICE.STAKE_TOKEN.value:
      return await stakeOptions(options);
    default:
      break;
  }
};

export default cliController;

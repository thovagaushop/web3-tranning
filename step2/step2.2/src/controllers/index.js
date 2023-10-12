import { inputParameter } from './signMessage.controller.js';

const cliController = async (options) => {
  switch (options.service) {
    case 'signMessage':
      return await inputParameter(options);
    case 'stakeToken':
      return options;
    default:
      break;
  }
};

export default cliController;

import inquirer from 'inquirer';
import stakeController from './stake.controller.js';
import unStakeController from './unstake.controller.js';
import withDrawController from './withdraw.controller.js';
import {
  FUNCTION_STAKING_QUESTION,
  TYPE_FUNCTION_STAKING,
} from '../../../common/constants/questions.constant.js';

export const erc20Options = async (options) => {
  const questions = [];

  // Input PrivateKey of wallet
  questions.push(FUNCTION_STAKING_QUESTION);

  const answers = await inquirer.prompt(questions);

  switch (answers.function) {
    case TYPE_FUNCTION_STAKING.STAKE.value:
      const stakeOption = await stakeController(options);
      return stakeOption;
    case TYPE_FUNCTION_STAKING.UNSTAKE.value:
      const unstakeOption = await unStakeController(options);
      return unstakeOption;
    case TYPE_FUNCTION_STAKING.WITH_DRAW.value:
      const withdrawOption = await withDrawController(options);
      return withdrawOption;
    default:
      break;
  }

  return {
    ...options,
    function: answers.function,
  };
};

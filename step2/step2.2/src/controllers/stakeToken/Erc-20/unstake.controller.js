import inquirer from 'inquirer';
import * as erc20TokenService from '../../../services/stakeToken/Erc-20/index.js';
import {
  INPUT_AMOUNT_QUESTION,
  INPUT_PRIVATE_KEY_QUESTION,
  INPUT_STAKE_TOKEN_QUESTION,
} from '../../../common/constants/questions.constant.js';

const unStakeController = async (options) => {
  const questions = [];

  questions.push(INPUT_STAKE_TOKEN_QUESTION);

  // Input PrivateKey of wallet
  questions.push(INPUT_PRIVATE_KEY_QUESTION);

  // Input PrivateKey of wallet
  questions.push(INPUT_AMOUNT_QUESTION);

  const answers = await inquirer.prompt(questions);

  try {
    const unstakeResult = await erc20TokenService.unstake(
      answers.stakeToken,
      answers.privateKey,
      answers.amount,
    );

    return unstakeResult;
  } catch (error) {
    return error.message;
  }
};

export default unStakeController;

import inquirer from 'inquirer';
import * as erc20TokenService from '../../../services/stakeToken/Erc-20/index.js';
import {
  INPUT_PRIVATE_KEY_QUESTION,
  INPUT_STAKE_TOKEN_QUESTION,
} from '../../../common/constants/questions.constant.js';

const withDrawController = async (options) => {
  const questions = [];

  questions.push(INPUT_STAKE_TOKEN_QUESTION);

  // Input PrivateKey of wallet
  questions.push(INPUT_PRIVATE_KEY_QUESTION);

  const answers = await inquirer.prompt(questions);

  try {
    const withDrawResult = await erc20TokenService.withdraw(
      answers.stakeToken,
      answers.privateKey,
    );

    return withDrawResult;
  } catch (error) {
    return error.message;
  }
};

export default withDrawController;

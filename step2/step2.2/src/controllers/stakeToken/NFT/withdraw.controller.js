import inquirer from 'inquirer';
import * as nftTokenService from '../../../services/stakeToken/NFT/index.js';
import {
  INPUT_NFT_TOKEN_ID,
  INPUT_PRIVATE_KEY_QUESTION,
  INPUT_STAKE_TOKEN_QUESTION,
} from '../../../common/constants/questions.constant.js';

const withDrawController = async (options) => {
  const questions = [];

  questions.push(INPUT_STAKE_TOKEN_QUESTION);

  // Input PrivateKey of wallet
  questions.push(INPUT_PRIVATE_KEY_QUESTION);

  // Input PrivateKey of wallet
  questions.push(INPUT_NFT_TOKEN_ID);

  const answers = await inquirer.prompt(questions);

  try {
    const withDrawResult = await nftTokenService.withdraw(
      answers.stakeToken,
      answers.privateKey,
      answers.tokenId,
    );

    return withDrawResult;
  } catch (error) {
    return error.message;
  }
};

export default withDrawController;

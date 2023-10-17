import inquirer from 'inquirer';
import { erc20Options } from './Erc-20/index.js';
import { nftptions } from './NFT/index.js';
import {
  TOKEN_TYPE_QUESTION,
  TYPE_TOKEN,
} from '../../common/constants/questions.constant.js';
import MessageConstant from '../../common/constants/message.constant.js';

export const stakeOptions = async (options) => {
  const questions = [];

  // Input PrivateKey of wallet
  questions.push(TOKEN_TYPE_QUESTION);

  const answers = await inquirer.prompt(questions);

  let newOptions;
  if (answers.tokenType === TYPE_TOKEN.ERC20.value) {
    newOptions = await erc20Options({ ...options });
  } else if (answers.tokenType === TYPE_TOKEN.NFT.value) {
    newOptions = await nftptions({ ...options });
  }

  if (!newOptions) return MessageConstant.BAD_REQUEST;

  return newOptions;
};

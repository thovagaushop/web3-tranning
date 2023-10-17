import inquirer from 'inquirer';
import {
  INPUT_PRIVATE_KEY_QUESTION,
  INPUT_MESSAGE_QUESTION,
} from '../../common/constants/questions.constant.js';
import signMessageWithPrivateKey from '../../services/signMessages/index.js';

export const signMessageOptions = async (options) => {
  const questions = [];

  // Input PrivateKey of wallet
  questions.push(INPUT_PRIVATE_KEY_QUESTION);

  // Input Message
  questions.push(INPUT_MESSAGE_QUESTION);

  const answers = await inquirer.prompt(questions);

  // Sign a message
  const signature = await signMessageWithPrivateKey(
    answers.message,
    answers.privateKey,
  );
  return signature;
};

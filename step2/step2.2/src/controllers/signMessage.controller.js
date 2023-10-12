import inquirer from 'inquirer';
import validatePrivateKey from '../common/validations/validatePrivateKey.js';
import MessageConstant from '../common/constants/message.constant.js';
import signMessageWithPrivateKey from '../services/signMessage.service.js';
// Validate message
const validateMissingMessage = (value) => {
  if (!value || !value.trim()) {
    return MessageConstant.MISSING_FIELD + ' message';
  }
  return true;
};

export const inputParameter = async (options) => {
  const questions = [];

  // Input PrivateKey of wallet
  questions.push({
    type: 'password',
    name: 'privateKey',
    message: 'Input your PrivateKey : ',
    mask: true,
    validate: validatePrivateKey,
  });

  // Input Message
  questions.push({
    type: 'input',
    name: 'message',
    message: 'Input your Message to sign : ',
    validate: validateMissingMessage,
  });

  const answers = await inquirer.prompt(questions);
  console.log('Answer', answers);

  // Sign a message
  const signature = await signMessageWithPrivateKey(
    answers.message,
    answers.privateKey,
  );
  return signature;
};

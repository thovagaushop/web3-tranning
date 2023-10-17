import inquirer from 'inquirer';
import arg from 'arg';

import cliController from './controllers/index.js';
import { SERVICE_QUESTION } from './common/constants/questions.constant.js';

async function parseArgumentsIntoOptions(rawArgs) {
  const args = arg(
    {},
    {
      argv: rawArgs.slice(2),
    },
  );
  return {
    service: args._[0],
  };
}

const listConfigQuestion = async (options) => {
  const questions = [];

  questions.push(SERVICE_QUESTION);
  const answers = await inquirer.prompt(questions);
  return {
    ...options,
    service: answers.service,
  };
};

export const cli = async (args) => {
  let options = await parseArgumentsIntoOptions(args);
  options = await listConfigQuestion(options);
  options = await cliController(options);
  console.log(options);
};

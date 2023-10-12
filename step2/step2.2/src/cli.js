import inquirer from 'inquirer';
import arg from 'arg';

import cliController from './controllers/index.js';

async function parseArgumentsIntoOptions(rawArgs) {
  const args = arg(
    {},
    {
      argv: rawArgs.slice(2),
    },
  );

  // const signature = await signMessageWithPrivateKey(
  //   args['--message'],
  //   args['--private'],
  // );

  // const signature = 'helo';
  console.log(args);
  return {
    service: args._[0],
  };
}

const listConfigQuestion = async (options) => {
  const questions = [];

  questions.push({
    type: 'list',
    name: 'service',
    message: 'Choose a service you want : ',
    choices: ['Sign a message', 'Stake Token'],
    default: 'Sign a message',
  });

  const answers = await inquirer.prompt(questions);
  console.log('Answer', answers);
  return {
    ...options,
    service:
      answers.service === 'Sign a message' ? 'signMessage' : 'stakeToken',
  };
};

export const cli = async (args) => {
  let options = await parseArgumentsIntoOptions(args);
  options = await listConfigQuestion(options);
  options = await cliController(options);
  console.log(options);
};

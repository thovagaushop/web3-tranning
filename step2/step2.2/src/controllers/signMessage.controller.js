const arg = require('arg');
const signMessageWithPrivateKey = require('./services/signMessage.service');

const parseArgumentsIntoOptions = async (rawArgs) => {
  const args = arg(
    {
      '--message': String,
      '--private': String,
      '-m': '--message',
      '-pk': '--private',
    },
    {
      argv: rawArgs.slice(2),
    },
  );

  const signature = await signMessageWithPrivateKey(
    args['--message'],
    args['--private'],
  );
  return signature;
};

export const cli = async (args) => {
  const options = await parseArgumentsIntoOptions(args);
  console.log(options);
};

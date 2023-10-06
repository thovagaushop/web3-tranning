import signMessageWithPrivateKey from './signMessage';

const arg = require('arg');

function test(message, privateKey) {
  return 'Message : ' + message + 'and + ' + privateKey;
}

async function parseArgumentsIntoOptions(rawArgs) {
  const args = arg(
    {
      '--message': String,
      '--private': String,
      '-m': '--message',
      '-pk': '--private',
    },
    {
      argv: rawArgs.slice(2),
    }
  );

  const signature = await signMessageWithPrivateKey(
    args['--message'],
    args['--private']
  );
  return signature;
}

export async function cli(args) {
  let options = await parseArgumentsIntoOptions(args);
  console.log(options);
}

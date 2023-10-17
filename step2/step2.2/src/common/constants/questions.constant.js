import {
  validateAmountInCommand,
  validateMissingFieldInCommand,
  validatePrivateKeyInCommand,
  validateTokenInCommand,
} from '../validations/validateInCommand.js';

// ==================== Service ==========================//
export const TYPE_SERVICE = {
  SIGN_MESSAGE: {
    name: 'Sign a message',
    value: 'signMessage',
  },
  STAKE_TOKEN: {
    name: 'Stake token',
    value: 'stakeToken',
  },
};

export const SERVICE_QUESTION = {
  type: 'list',
  name: 'service',
  message: 'Choose a service you want : ',
  choices: Object.values(TYPE_SERVICE),
  default: TYPE_SERVICE.SIGN_MESSAGE.value,
};

// ==================== Sign Message ==========================//

export const INPUT_PRIVATE_KEY_QUESTION = {
  type: 'password',
  name: 'privateKey',
  message: 'Input your PrivateKey : ',
  mask: true,
  validate: validatePrivateKeyInCommand,
};

// Question message to sign
export const INPUT_MESSAGE_QUESTION = {
  type: 'input',
  name: 'message',
  message: 'Input your Message to sign : ',
  validate: validateMissingFieldInCommand,
};

// ==================== Type Token to Stake ==========================//

export const TYPE_TOKEN = {
  ERC20: {
    name: 'ERC-20',
    value: 'erc20',
  },
  NFT: {
    name: 'NFT',
    value: 'nft',
  },
};

export const TOKEN_TYPE_QUESTION = {
  type: 'list',
  name: 'tokenType',
  message: 'What type of token do u want to stake : ',
  choices: Object.values(TYPE_TOKEN),
  default: TYPE_TOKEN.ERC20.value,
};

// ==================== Function staking ==========================//

export const TYPE_FUNCTION_STAKING = {
  STAKE: {
    name: 'Stake',
    value: 'stake',
  },
  UNSTAKE: {
    name: 'Unstake',
    value: 'unstake',
  },
  WITH_DRAW: {
    name: 'With draw',
    value: 'withdraw',
  },
};

export const FUNCTION_STAKING_QUESTION = {
  type: 'list',
  name: 'function',
  message: 'What action u want to do : ',
  choices: Object.values(TYPE_FUNCTION_STAKING),
  default: TYPE_FUNCTION_STAKING.STAKE.value,
};

// ==================== Stake ERC 20 Token ==========================//
export const INPUT_ERC20_TOKEN_QUESTION = {
  type: 'input',
  name: 'erc20Token',
  message: 'Input ERC-20 Token : ',
  validate: validateTokenInCommand,
};

export const INPUT_STAKE_TOKEN_QUESTION = {
  type: 'input',
  name: 'stakeToken',
  message: 'Input Stake Token : ',
  validate: validateTokenInCommand,
};

export const INPUT_AMOUNT_QUESTION = {
  type: 'input',
  name: 'amount',
  message: 'Input your amount token to do : ',
  validate: validateAmountInCommand,
};

// ==================== Stake ERC 20 Token ==========================//
export const INPUT_NFT_TOKEN_QUESTION = {
  type: 'input',
  name: 'nftToken',
  message: 'Input NFT Token : ',
  validate: validateTokenInCommand,
};

export const INPUT_NFT_TOKEN_ID = {
  type: 'input',
  name: 'tokenId',
  message: 'Input Token Id : ',
  validate: validateMissingFieldInCommand,
};

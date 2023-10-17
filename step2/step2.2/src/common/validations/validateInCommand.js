import MessageConstant from '../constants/message.constant.js';
import { validatePrivateKey } from './validatePrivateKey.js';
import { validateToken } from './validateToken.js';

export const validateTokenInCommand = (token) => {
  if (!validateToken(token)) {
    return MessageConstant.INVALID_TOKEN;
  }

  return true;
};

export const validateAmountInCommand = (value) => {
  if (isNaN(Number(value))) {
    return MessageConstant.AMOUNT_IS_NOT_NUMBER;
  }

  return true;
};

export const validatePrivateKeyInCommand = (privateKey) => {
  try {
    const isValid = validatePrivateKey(privateKey);
    if (!isValid) return MessageConstant.INVALID_PRIVATE_KEY;

    return true;
  } catch (error) {
    return error.message;
  }
};

export const validateMissingFieldInCommand = (value) => {
  if (!value || !value.trim()) {
    return MessageConstant.MISSING_FIELD;
  }
  return true;
};

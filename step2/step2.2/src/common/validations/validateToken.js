import { ethers } from 'ethers';
import { ValidationError } from '../exeptions/index.js';

export const validateToken = (token) => {
  try {
    const address = ethers.getAddress(token);
    if (address) {
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
};

export const validateListToken = (objectToken) => {
  const listAttribute = Object.keys(objectToken);

  // Message to show if invalid
  const messages = [];
  for (const attr of listAttribute) {
    if (!validateToken(objectToken[attr])) {
      const msg = `Invalid format token at : ${attr}`;
      messages.push(msg);
    }
  }

  if (messages.length) {
    throw new ValidationError(messages.join('\n'));
  } else {
    return true;
  }
};

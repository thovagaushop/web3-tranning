import { ethers } from 'ethers';
import { ValidationError } from '../../common/exceptions/custom.exception.js';
import MessageConstant from '../../common/constants/message.constant.js';

const validateToken = (token) => {
  try {
    const result = ethers.getAddress(token);
    if (!result) return false;
    return true;
  } catch (error) {
    return false;
  }
};

const validateListToken = (data) => {
  const listAttribute = Object.keys(data);
  // Create message list if error invalid token
  const messages = [];
  for (const attribute of listAttribute) {
    if (!validateToken(data[attribute])) {
      const msg = MessageConstant.INVALID_ADDRESS + ': at ' + attribute;
      messages.push(msg);
    }
  }

  if (messages.length > 0) throw new ValidationError(messages.join('\n'));

  return true;
};

export default validateListToken;

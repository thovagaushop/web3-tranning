import MessageConstant from '../../common/constants/message.constant.js';
import { ValidationError } from '../../common/exceptions/custom.exception.js';

const validateFieldRequired = (value) => {
  if (!value) return false;
  return true;
};

const validateListFieldRequired = (data) => {
  const listAttribute = Object.keys(data);
  const messages = [];
  for (const attribute of listAttribute) {
    console.log(data[attribute]);
    if (!validateFieldRequired(data[attribute])) {
      const msg = MessageConstant.MISSING_FIELD + ': ' + attribute;
      messages.push(msg);
    }
  }
  console.log(listAttribute);
  if (!messages.length) return true;
  else {
    throw new ValidationError(messages.join('\n'));
  }
};

export default validateListFieldRequired;

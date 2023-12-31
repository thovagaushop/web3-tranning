import { ValidationError } from '../exeptions/index.js';

export const validateMissingField = (value) => {
  if (!value) {
    return false;
  }
  return true;
};

export const validateListMissingField = (objectField) => {
  const listAttribute = Object.keys(objectField);

  // Message to show if invalid
  const messages = [];
  for (const attr of listAttribute) {
    if (!validateMissingField(objectField[attr])) {
      const msg = `Missing Field ${attr}`;
      messages.push(msg);
    }
  }

  if (messages.length) {
    throw new ValidationError(messages.join('\n'));
  } else {
    return true;
  }
};

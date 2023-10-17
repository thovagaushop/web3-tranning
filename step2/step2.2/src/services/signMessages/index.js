import { getWallet } from '../../common/contracts/index.js';
import { BadRequestError } from '../../common/exeptions/index.js';
import MessageConstant from '../../common/constants/message.constant.js';

const signMessageWithPrivateKey = async (message, privateKey) => {
  try {
    const signer = getWallet(privateKey);
    const signature = await signer.signMessage(message);
    return {
      Signature: signature,
    };
  } catch (error) {
    throw new BadRequestError(MessageConstant.BAD_REQUEST);
  }
};

export default signMessageWithPrivateKey;

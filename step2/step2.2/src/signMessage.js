const ethers = require('ethers');

async function signMessageWithPrivateKey(message, privateKey) {
  const wallet = new ethers.Wallet(privateKey);

  const messageBytes = ethers.toUtf8Bytes(message);
  const messageHash = ethers.keccak256(messageBytes);

  try {
    const signature = await wallet.signMessage(messageHash);
    return signature;
  } catch (error) {
    console.error('Error signing the message:', error.message);
    throw error;
  }
}

export default signMessageWithPrivateKey;

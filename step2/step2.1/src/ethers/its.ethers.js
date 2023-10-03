import { ethers } from 'ethers';
import abiConstant from '../constants/abi.constant.js';
const main = async () => {
  const provider = new ethers.JsonRpcProvider(
    'https://sepolia.infura.io/v3/e0de27cd3bd24144a0b1b6986a05db04',
  );

  const contractToken = '0xA36755735977F9cc24a91532652ad1AEF4707771';

  const abi = abiConstant[contractToken];
  console.log(abi);

  const contract = new ethers.Contract(contractToken, abi, provider);

  const result = await contract.totalSupply();
  console.log(result);
  console.log(provider);
};

main();

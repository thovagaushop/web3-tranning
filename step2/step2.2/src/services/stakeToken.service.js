import { ethers } from 'ethers';
import { getAib, getProvider } from '../common/contracts/index.js';
const stakeTokenService = async () => {
  const provider = getProvider();

  //   await provider.send('eth_requestAccounts', []);

  //   const signer = await provider.getSigner(
  //     'cf732fbf23eb9900e6d01e5b46dee9778cf1c0b7329bae93a29436164ce41ae8',
  //   );

  const signer = new ethers.Wallet(
    'cf732fbf23eb9900e6d01e5b46dee9778cf1c0b7329bae93a29436164ce41ae8',
    provider,
  );

  console.log(
    await provider.getBalance('0x270dcE2c7d0F7Eb4bf5Fd305C70a0757b7C6D3e9'),
  );

  console.log(ethers.parseEther('0.5'));
  //   const contract = new ethers.Contract(
  //     '0xebE5F4ED7ceD336A82aA107c27346CFCC5385fd7',
  //     getAib(),
  //     signer,
  //   );

  //   const result = await contract.stakeERC20(ethers.parseEther('0.01'));

  //   console.log(result);
};

stakeTokenService();

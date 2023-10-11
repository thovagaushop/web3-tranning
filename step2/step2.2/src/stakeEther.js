import { ethers } from "ethers"
import abi from "../../step2.1/src/common/abi/itsAbi.json" assert { type: "json" }

const toWei = (ether) => ethers.parseEther(ether);
const toEther = (ether) => ether.parseEther(ether);

const main = async () => {
    try {
        const provider = new ethers.JsonRpcProvider("https://sepolia.infura.io/v3/e0de27cd3bd24144a0b1b6986a05db04");
        // const provider = new ethers.
        const contractAddress = "0x270dcE2c7d0F7Eb4bf5Fd305C70a0757b7C6D3e9";
        const contract = new ethers.Contract(contractAddress, abi, provider);

        const wallet = new ethers.Wallet(privateKey);


        // Stake token
        const wei = toWei(String(amount));
        const data = { value: wei };
        const result = await contract.
    } catch (error) {
        console.log(error);
    }
}
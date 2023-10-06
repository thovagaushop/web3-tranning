import { config } from 'dotenv';
config();
const envConstant = {
  PORT: process.env.PORT,
  SEPOLIA_RPC_ID: process.env.SEPOLIA_RPC_ID,
};
export default envConstant;

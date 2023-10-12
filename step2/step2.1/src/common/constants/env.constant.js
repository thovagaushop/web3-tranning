import { config } from 'dotenv';
config();
const envConstant = {
  PORT: process.env.PORT,
  SEPOLIA_RPC_URL: process.env.SEPOLIA_RPC_URL,
};
export default envConstant;

import { Router } from 'express';
import readContractRouter from './readContract.router.js';
const router = Router();

router.use('/', readContractRouter);

export default router;

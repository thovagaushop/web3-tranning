import { Router } from 'express';
import readContractRouter from './readContract.router.js';
const router = Router();

router.use('/read', readContractRouter);

export default router;

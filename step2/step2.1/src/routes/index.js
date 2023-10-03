import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import contractRouter from './contract/index.js';
import swaggerSpec from '../docs/swaggerDocs.js';

const router = Router();

// Documents router
router.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Contract router
router.use('/contract', contractRouter);

export default router;

import { Router } from 'express';
import * as readContractController from '../../controllers/readContract.controller.js';
const router = Router();

/**
 * @swagger
 * tags:
 *  name: Read Contract
 *  description: Api to read contract data
 */

/**
 * @swagger
 * /api/contract/read/allowance/{token}:
 *   get:
 *     description: Read data of contract
 *     tags: [Read Contract]
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: token
 *         description: Token of contract
 *         in: path
 *         required: true
 *         type: string
 *       - name: owner
 *         description: Address of owner
 *         in: query
 *         required: true
 *         type: string
 *       - name: spender
 *         description: Address of spender
 *         in: query
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Get data success
 *         schema:
 *           type: object
 */
router.get('/allowance/:token', readContractController.allowance);

/**
 * @swagger
 * /api/contract/read/balance/{token}:
 *   get:
 *     description: Read data of contract
 *     tags: [Read Contract]
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: token
 *         description: Token of contract
 *         in: path
 *         required: true
 *         type: string
 *       - name: account
 *         description: Account address
 *         in: query
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Get data success
 *         schema:
 *           type: object
 */
router.get('/balance/:token', readContractController.balance);

/**
 * @swagger
 * /api/contract/read/decimals/{token}:
 *   get:
 *     description: Read data of contract
 *     tags: [Read Contract]
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: token
 *         description: Token of contract
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Get data success
 *         schema:
 *           type: object
 */
router.get('/decimals/:token', readContractController.decimals);

/**
 * @swagger
 * /api/contract/read/name/{token}:
 *   get:
 *     description: Read data of contract
 *     tags: [Read Contract]
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: token
 *         description: Token of contract
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Get data success
 *         schema:
 *           type: object
 */
router.get('/name/:token', readContractController.name);

/**
 * @swagger
 * /api/contract/read/symbol/{token}:
 *   get:
 *     description: Read data of contract
 *     tags: [Read Contract]
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: token
 *         description: Token of contract
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Get data success
 *         schema:
 *           type: object
 */
router.get('/symbol/:token', readContractController.symbol);

/**
 * @swagger
 * /api/contract/read/totalSupply/{token}:
 *   get:
 *     description: Read data of contract
 *     tags: [Read Contract]
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: token
 *         description: Token of contract
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Get data success
 *         schema:
 *           type: object
 */
router.get('/totalSupply/:token', readContractController.totalSupply);

export default router;

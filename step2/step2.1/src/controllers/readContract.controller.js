import HttpStatusCodeConstant from '../common/constants/httpStatus.constant.js';
import StatusResponseConstant from '../common/constants/statusResponse.constant.js';
import * as readContractService from '../services/readContract.service.js';
import validateListFieldRequired from '../utils/validation/validateFieldRequired.js';

export const allowance = async (req, res) => {
  try {
    // Validate input
    const token = req.params.token;
    const { owner, spender } = req.query;
    validateListFieldRequired({ owner, spender, token });

    // If valid
    const result = await readContractService.allowance(token, owner, spender);
    res.status(HttpStatusCodeConstant.SUCCESS).json({
      status: StatusResponseConstant.SUCCESS,
      data: result,
    });
  } catch (error) {
    res.status(HttpStatusCodeConstant.BAD_REQUEST).json({
      status: StatusResponseConstant.ERROR,
      msg: error.message,
    });
  }
};

export const balance = async (req, res) => {
  try {
    const account = req.query.account;
    const token = req.params.token;
    // Validate input
    validateListFieldRequired({ account, token });
    const result = await readContractService.balance(token, account);
    res.status(HttpStatusCodeConstant.SUCCESS).json({
      status: StatusResponseConstant.SUCCESS,
      data: result,
    });
  } catch (error) {
    res.status(HttpStatusCodeConstant.BAD_REQUEST).json({
      status: StatusResponseConstant.ERROR,
      msg: error.message,
    });
  }
};

export const decimals = async (req, res) => {
  try {
    const token = req.params.token;
    // Validate input
    validateListFieldRequired({ token });
    const result = await readContractService.decimals(req.params.token);
    res.status(HttpStatusCodeConstant.SUCCESS).json({
      status: StatusResponseConstant.SUCCESS,
      data: result,
    });
  } catch (error) {
    res.status(HttpStatusCodeConstant.BAD_REQUEST).json({
      status: StatusResponseConstant.ERROR,
      msg: error.message,
    });
  }
};

export const name = async (req, res) => {
  try {
    const token = req.params.token;
    // Validate input
    validateListFieldRequired({ token });
    const result = await readContractService.name(token);
    res.status(HttpStatusCodeConstant.SUCCESS).json({
      status: 'success',
      data: result,
    });
  } catch (error) {
    res.status(HttpStatusCodeConstant.BAD_REQUEST).json({
      status: StatusResponseConstant.ERROR,
      msg: error.message,
    });
  }
};

export const symbol = async (req, res) => {
  try {
    const token = req.params.token;
    // Validate input
    validateListFieldRequired({ token });
    const result = await readContractService.symbol(token);
    res.status(HttpStatusCodeConstant.SUCCESS).json({
      status: 'success',
      data: result,
    });
  } catch (error) {
    res.status(HttpStatusCodeConstant.BAD_REQUEST).json({
      status: StatusResponseConstant.ERROR,
      msg: error.message,
    });
  }
};

export const totalSupply = async (req, res) => {
  try {
    const token = req.params.token;
    // Validate input
    validateListFieldRequired({ token });
    const result = await readContractService.totalSupply(token);
    res.status(HttpStatusCodeConstant.SUCCESS).json({
      status: 'success',
      data: result,
    });
  } catch (error) {
    res.status(HttpStatusCodeConstant.BAD_REQUEST).json({
      status: StatusResponseConstant.ERROR,
      msg: error.message,
    });
  }
};

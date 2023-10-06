import * as readContractService from '../services/readContract.service.js';

export const allowance = async (req, res) => {
  try {
    console.log(req.params.token);
    const query = {
      type: 'allowance',
      owner: req.query.owner,
      spender: req.query.spender,
    };
    const result = await readContractService.getData(req.params.token, query);
    res.status(200).json({
      status: 'success',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      msg: error.message,
    });
  }
};

export const balance = async (req, res) => {
  try {
    const query = {
      type: 'balance',
      account: req.query.account,
    };
    const result = await readContractService.getData(req.params.token, query);
    res.status(200).json({
      status: 'success',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      msg: error.message,
    });
  }
};

export const decimals = async (req, res) => {
  try {
    const query = {
      type: 'decimals',
    };
    const result = await readContractService.getData(req.params.token, query);
    res.status(200).json({
      status: 'success',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      msg: error.message,
    });
  }
};

export const name = async (req, res) => {
  try {
    const query = {
      type: 'name',
    };
    const result = await readContractService.getData(req.params.token, query);
    res.status(200).json({
      status: 'success',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      msg: error.message,
    });
  }
};

export const symbol = async (req, res) => {
  try {
    const query = {
      type: 'symbol',
    };
    const result = await readContractService.getData(req.params.token, query);
    res.status(200).json({
      status: 'success',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      msg: error.message,
    });
  }
};

export const totalSupply = async (req, res) => {
  try {
    const query = {
      type: 'totalSupply',
    };
    const result = await readContractService.getData(req.params.token, query);
    res.status(200).json({
      status: 'success',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      msg: error.message,
    });
  }
};

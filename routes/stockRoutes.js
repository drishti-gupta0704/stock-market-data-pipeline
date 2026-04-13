
const express = require('express');
const router = express.Router();
const {
  getStockData,
  getLatestStockData,
  getStockHistoryData
} = require('../controllers/stockController');

// router.get('/:symbol', getStockData);
router.get('/fetch/:symbol', getStockData);
router.get('/:symbol', getLatestStockData);
router.get('/history/:symbol', getStockHistoryData);

module.exports = router;
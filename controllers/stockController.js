
const { fetchStockData } = require('../services/stockService');
const { getLatestStock, getStockHistory} = require('../services/dbService');
const logger = require('../utils/logger');

const getStockData = async (req, res) => {
  try {
    const { symbol } = req.params;
    const data = await fetchStockData(symbol);

    res.status(200).json({
      success: true,
      data
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch stock data'
    });
  }
};


const getLatestStockData = async (req, res) => {
  try {
    const { symbol } = req.params;
    const data = await getLatestStock(symbol);
    logger.info(`Fetched latest data for ${symbol}`);
    res.json({ success: true, data });

  } catch (err) {
    logger.error(`Error fetching data: ${err.message}`);
    res.status(500).json({ success: false });
  }
};

const getStockHistoryData = async (req, res) => {
  try {
    const { symbol } = req.params;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const data = await getStockHistory(symbol, page, limit);

    res.json({ success: true, data });

  } catch (err) {
    res.status(500).json({ success: false });
  }
};

module.exports = {
  getStockData,
  getLatestStockData,
  getStockHistoryData
};
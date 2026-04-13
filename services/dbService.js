
const Stock = require('../models/Stock');

const saveStockData = async (data) => {
  try {
    const existing = await Stock.findOne({
      symbol: data.symbol,
      date: data.date
    });

    if (existing) {
      console.log('Duplicate data, skipping...');
      return existing;
    }

    const stock = new Stock(data);
    const saved = await stock.save();
    return saved;

  } catch (error) {
    console.error('DB Error:', error.message);
    throw error;
  }
};

const getLatestStock = async (symbol) => {
  return await Stock.findOne({ symbol })
    .sort({ date: -1 }); 
};

const getStockHistory = async (symbol) => {
  return await Stock.find({ symbol })
    .sort({ date: -1 }); 
};

module.exports = { saveStockData,
                 getLatestStock,
                 getStockHistory };

const Stock = require('../models/Stock');

const getTopGainers = async (limit = 5) => {
  return await Stock.find({})
    .sort({ percentChange: -1 }) 
    .limit(limit);
};


const getTopLosers = async (limit = 5) => {
  return await Stock.find({})
    .sort({ percentChange: 1 }) 
    .limit(limit);
};

const getMovingAverage = async (symbol, days = 5) => {
  const data = await Stock.find({ symbol })
    .sort({ date: -1 })
    .limit(days);

  if (data.length === 0) {
    throw new Error('No data found');
  }

  const total = data.reduce((sum, item) => sum + item.close, 0);
  const avg = total / data.length;

  return {
    symbol,
    days,
    movingAverage: parseFloat(avg.toFixed(2))
  };
};

module.exports = {
  getTopGainers,
  getTopLosers,
  getMovingAverage
};
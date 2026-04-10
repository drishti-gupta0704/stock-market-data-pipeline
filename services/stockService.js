
const axios = require('axios');
const { transformStockData } = require('./transformService');

const fetchStockData = async (symbol) => {
  try {
    const API_KEY = process.env.ALPHA_VANTAGE_API_KEY;

    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${API_KEY}`;

    const response = await axios.get(url);
    const cleanData = transformStockData(response.data, symbol);
    return cleanData;

  } catch (error) {
    console.error('Error fetching stock data:', error.message);
    throw error;
  }
};

module.exports = { fetchStockData };
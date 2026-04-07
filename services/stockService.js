
const axios = require('axios');

const fetchStockData = async (symbol) => {
  try {
    const API_KEY = process.env.ALPHA_VANTAGE_API_KEY;

    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${API_KEY}`;

    const response = await axios.get(url);

    return response.data;

  } catch (error) {
    console.error('Error fetching stock data:', error.message);
    throw error;
  }
};

module.exports = { fetchStockData };
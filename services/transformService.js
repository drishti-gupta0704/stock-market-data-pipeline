
const transformStockData = (apiData, symbol) => {
  try {
    const timeSeries = apiData["Time Series (Daily)"];

    if (!timeSeries) {
      throw new Error("Invalid API response");
    }

    // Get latest date
    const dates = Object.keys(timeSeries);
    const latestDate = dates[0];

    const latestData = timeSeries[latestDate];

    const open = parseFloat(latestData["1. open"]);
    const high = parseFloat(latestData["2. high"]);
    const low = parseFloat(latestData["3. low"]);
    const close = parseFloat(latestData["4. close"]);
    const volume = parseInt(latestData["5. volume"]);

    const priceChange = close - open;
    const percentChange = ((priceChange / open) * 100).toFixed(2);

    return {
      symbol,
      date: latestDate,
      open,
      high,
      low,
      close,
      volume,
      priceChange,
      percentChange: Number(percentChange)
    };

  } catch (error) {
    console.error("Transformation Error:", error.message);
    throw error;
  }
};

module.exports = { transformStockData };
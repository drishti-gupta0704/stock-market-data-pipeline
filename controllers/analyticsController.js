
const {
  getTopGainers,
  getTopLosers,
  getMovingAverage
} = require('../services/analyticsService');

const topGainers = async (req, res) => {
  try {
    const data = await getTopGainers();

    res.json({ success: true, data });

  } catch (error) {
    res.status(500).json({ success: false });
  }
};


const topLosers = async (req, res) => {
  try {
    const data = await getTopLosers();

    res.json({ success: true, data });

  } catch (error) {
    res.status(500).json({ success: false });
  }
};


const movingAverage = async (req, res) => {
  try {
    const { symbol } = req.params;
    const days = req.query.days || 5;

    const data = await getMovingAverage(symbol, days);

    res.json({ success: true, data });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = {
  topGainers,
  topLosers,
  movingAverage
};
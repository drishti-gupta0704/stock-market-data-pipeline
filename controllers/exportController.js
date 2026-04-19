
const { exportToCSV } = require('../services/exportService');

const exportCSV = async (req, res) => {
  try {
    const csv = await exportToCSV();

    res.header('Content-Type', 'text/csv');
    res.attachment('stocks.csv');

    return res.send(csv);

  } catch (error) {
    res.status(500).json({ success: false });
  }
};

module.exports = { exportCSV };
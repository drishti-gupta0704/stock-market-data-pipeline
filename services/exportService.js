
const { Parser } = require('json2csv');
const Stock = require('../models/Stock');

const exportToCSV = async () => {
const data = await Stock.find({});

  const fields = [
    'symbol',
    'date',
    'open',
    'high',
    'low',
    'close',
    'volume',
    'priceChange',
    'percentChange'
  ];

  const parser = new Parser({ fields });
  const csv = parser.parse(data);

  return csv;
};

module.exports = { exportToCSV };
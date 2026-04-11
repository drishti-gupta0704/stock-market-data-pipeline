
const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
  symbol: {
    type: String,
    required: true,
    index: true
  },
  date: {
    type: String,
    required: true
  },
  open: Number,
  high: Number,
  low: Number,
  close: Number,
  volume: Number,
  priceChange: Number,
  percentChange: Number
}, {
  timestamps: true
});

stockSchema.index({ symbol: 1, date: 1 }, { unique: true });

module.exports = mongoose.model('Stock', stockSchema);
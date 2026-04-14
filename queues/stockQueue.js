
const Queue = require('bull');

const stockQueue = new Queue('stockQueue', {
  redis: {
    host: '127.0.0.1',
    port: 6379
  }
});

module.exports = stockQueue;

const cron = require('node-cron');
const stockQueue = require('../queues/stockQueue');

const symbols = ['AAPL', 'TSLA', 'GOOGL', 'MSFT', 'AMZN'];

cron.schedule('*/10 * * * *', async () => {
  console.log('Running stock cron job...');

  try {
    for (let symbol of symbols) {
      await stockQueue.add(
        { symbol },
        {
          attempts: 3,
          backoff: 5000
        }
      );

      console.log(`Job added for ${symbol}`);
    }

  } catch (error) {
    console.error('Cron Error:', error.message);
  }
});
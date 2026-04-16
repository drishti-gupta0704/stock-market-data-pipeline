
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const app = express();
app.use(cors());
app.use(express.json());
connectDB();

require('./cron/stockCron'); 

app.use('/api/stocks', require('./routes/stockRoutes'));

app.use('/api/analytics', require('./routes/analyticsRoutes'));

app.get('/', (req, res) => {
  res.send('Stock Data Pipeline API is running');
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
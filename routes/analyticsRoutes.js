
const express = require('express');
const router = express.Router();

const {
  topGainers,
  topLosers,
  movingAverage
} = require('../controllers/analyticsController');

router.get('/top-gainers', topGainers);
router.get('/top-losers', topLosers);
router.get('/moving-average/:symbol', movingAverage);

module.exports = router;
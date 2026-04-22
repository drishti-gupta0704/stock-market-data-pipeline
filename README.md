
#  Stock Market Data Pipeline & Analytics API

A scalable backend system that fetches, processes, stores, and analyzes stock market data using Node.js, MongoDB, Redis, and Bull queue.

## Features

-  Data ingestion from Alpha Vantage API
-  Data transformation (OHLC + metrics)
-  MongoDB storage with schema design
-  Background job processing using Bull + Redis
-  Automated data fetching using Cron jobs
-  REST APIs for stock data
-  Analytics APIs (Top gainers, losers, moving average)
-  CSV export functionality
-  Logging system using Winston
-  Pagination support
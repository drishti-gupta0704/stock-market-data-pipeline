
const Redis = require('ioredis');
const redis = new Redis();

const getCache = async (key) => {
  const data = await redis.get(key);
  return data ? JSON.parse(data) : null;
};

const setCache = async (key,value, expiry = 60) => {
  await redis.set(key, JSON.stringify(value), 'EX', expiry);
};

module.exports = {
  getCache,
  setCache
};
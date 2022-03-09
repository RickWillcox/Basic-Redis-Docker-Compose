"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.redisConnection = void 0;
const Redis = require('ioredis');
function redisConnection() {
    const redis = new Redis({ host: '127.0.0.1', port: 6379 });
    redis.on('connect', () => {
        console.log('connected to redis successfully!');
    });
    redis.on('error', (error) => {
        console.log('Redis connection error :', error);
    });
    return redis;
}
exports.redisConnection = redisConnection;
const redis = redisConnection();

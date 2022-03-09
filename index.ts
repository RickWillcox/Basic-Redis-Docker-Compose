const Redis = require('ioredis');

export function redisConnection(): any {
    const redis = new Redis({ host: '127.0.0.1', port: 6379 });
    redis.on('connect', () => {
        console.log('connected to redis successfully!');
    });

    redis.on('error', (error) => {
        console.log('Redis connection error :', error);
    });
    return redis;
}

const redis = redisConnection();

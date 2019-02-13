import winston from 'winston';
import fs from 'fs';
import config from '../config/env';

const logDir = 'log';
if ( !fs.existsSync( logDir ) ) {
  fs.mkdirSync( logDir );
}

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || config.logLevel,
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: `${logDir}/error.log`, level: 'error' }),
    new winston.transports.File({ filename: `${logDir}/combined.log` })
  ]
});

export default logger;
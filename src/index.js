import logger from 'loglevel';
import startServer from './server-start';

const notTest = process.env.NODE_ENV !== 'test';
const logLevel = process.env.LOG_LEVEL || (notTest ? 'info' : 'warn');

logger.setLevel(logLevel);

startServer({ port: 3000 });

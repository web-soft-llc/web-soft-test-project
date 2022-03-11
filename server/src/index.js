const { Server, AuthModule, logger } = require('web-soft-server');
const modules = require('./modules');

let server = {};
const start = async () => {
  try {
    server = new Server({ ...modules, auth: AuthModule }, { host: 'localhost', port: 80, cors: false });
  } catch (error) {
    logger.fatal(error);
  }
};

process.on('uncaughtException', async (error) => {
  logger.fatal(error);
  await server.close();
  process.exit(1);
});

process.on('unhandledRejection', async (reason, p) => {
  logger.fatal(new Error(`Reason: ${reason}. Unhandled Rejection at Promise. Promise: ${p}`));
  await server.close();
  process.exit(1);
});

process.on('SIGTERM', async () => {
  logger.warn('Exited witn SIGTERM signal.');
  await server.close();
  process.exit(1);
});

start();

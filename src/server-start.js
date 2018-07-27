import express from 'express';
import cors from 'cors';
import logger from 'loglevel';

async function startServer({ port = process.env.SERVER_PORT } = {}) {
  const app = express();
  app.use(cors());

  app.get('/health', (req, res) => res.send({ uptime: process.uptime() }));

  return new Promise(resolve => {
    const server = app.listen(port, () => {
      logger.info(`Listening on port ${server.address().port}`);
      const originalClose = server.close.bind(server);
      server.close = () => {
        return new Promise(resolveClose => {
          originalClose(resolveClose);
        });
      };
      resolve(server);
    });
  });
}

export default startServer;

import axios from 'axios';
import startServer from '../server-start';

let baseURL, api, server;

beforeAll(async () => {
  server = await startServer({ port: 8778 });
  baseURL = `http://localhost:${server.address().port}/`;
  api = axios.create({ baseURL });
});

test('Server start with no errors', async () => {
  const message = await api.get('/health').then(({ data }) => data);
  expect(message).toHaveProperty('uptime');
});

afterAll(() => server.close());

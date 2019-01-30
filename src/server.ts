import * as bodyParser from 'body-parser';
import * as compression from 'compression';
import * as Express from 'express';
import * as http from 'http';

import { apiRouter } from './Routes/apiRoutes';
import { serverRouter } from './Routes/serverRoutes';

import config from './config';
import LoggerUtil from './utils/LoggerUtil';

export const app = Express();
const server = http.createServer(app);

app.use(compression({
  threshold: 0,
  level: 9,
  memLevel: 9,
}));

app.use(Express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// routing
app.use(apiRouter);
app.use(serverRouter);

server.listen(config.PORT, () => {
  LoggerUtil.log(`App listening on ${config.DOMAIN_URL}`);
});

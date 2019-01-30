import * as bodyParser from 'body-parser';
import * as Express from 'express';
import * as http from 'http';

import { router } from './Routes/serverRoutes';

import { ImageController } from './controllers/ImageController';

import config from './config';
import LoggerUtil from './utils/LoggerUtil';

export const app = Express();
const server = http.createServer(app);

app.use(Express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// routing
app.use(router);

server.listen(5000, () => {
  LoggerUtil.log(`App listening on ${config.DOMAIN_URL}`);
  ImageController.generateEmiruImage('ギュイーンとソウルが\nシャウトするのです');
});

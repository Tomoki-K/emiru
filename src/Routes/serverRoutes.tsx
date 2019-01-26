import * as Express from 'express';
import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';

import { renderRoutes } from 'react-router-config';
import { StaticRouter } from 'react-router-dom';

import routes from './routes';

export const router = Express.Router();

router.get('*', (req, res) => {
  const context = {};
  ReactDOMServer.renderToNodeStream(
    <StaticRouter location={req.url} context={context}>
      {renderRoutes(routes)}
    </StaticRouter>,
  ).pipe(res);
});

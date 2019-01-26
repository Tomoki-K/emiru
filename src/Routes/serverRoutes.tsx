import * as Express from 'express';
import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import { Helmet } from 'react-helmet';

import { renderRoutes } from 'react-router-config';
import { StaticRouter } from 'react-router-dom';

import routes from './routes';
import template from './template';

export const router = Express.Router();

router.get('*', (req, res) => {
  const context = {};
  const markup = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      {renderRoutes(routes)}
    </StaticRouter>,
  );
  const helmet = Helmet.renderStatic();
  res.status(200).send(template({ markup, helmet }));
});

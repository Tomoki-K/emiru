import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { renderRoutes } from 'react-router-config';
import { BrowserRouter } from 'react-router-dom';

import routes from './Routes/routes';

ReactDOM.hydrate(
  <BrowserRouter>
    {renderRoutes(routes)}
  </BrowserRouter>,
  document.getElementById('app'),
);

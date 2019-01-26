import * as React from 'react';
import { Helmet } from 'react-helmet';
import { renderRoutes } from 'react-router-config';

export const App = ({ route }) => {
  return (
    <>
      <Helmet title="えみるがシャウトするのです"/>
      <main>
        {renderRoutes(route.routes)}
      </main>
    </>
  );
};

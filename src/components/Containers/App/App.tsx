import * as React from 'react';
import { Helmet } from 'react-helmet';
import { renderRoutes } from 'react-router-config';
import { Footer } from '../Footer';
import { Header } from '../Header';

export const App = ({ route }) => {
  return (
    <>
      <Helmet title="えみるがシャウトするのです"/>
      <Header/>
      <main>
        {renderRoutes(route.routes)}
      </main>
      <Footer/>
    </>
  );
};

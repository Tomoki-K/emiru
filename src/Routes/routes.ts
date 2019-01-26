import { App } from '../components/Containers/App';
import routePaths from './routePaths';

/* === Pages === */
import { Top } from '../components/Pages/Top';

const routes = [
  {
    component: App,
    routes: [
      {
        path: routePaths.TOP,
        exact: true,
        component: Top,
      },
    ],
  },
];

export default routes;

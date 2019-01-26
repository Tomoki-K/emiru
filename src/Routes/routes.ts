import { Html } from '../components/Containers/Html';
import routePaths from './routePaths';

/* === Pages === */
import { Top } from '../components/Pages/Top';

const routes = [
  {
    component: Html,
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

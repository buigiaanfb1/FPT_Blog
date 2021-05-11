import Detail from '../layouts/HomeTemplate/Detail';
import Home from './../layouts/HomeTemplate/Home';
export const routesHome = [
  {
    exact: false,
    path: '/',
    component: Home,
  },
  {
    exact: false,
    path: '/:slug',
    component: Detail,
  },
];

export const routesAdmin = [
  {
    exact: false,
    path: '/admin',
  },
];

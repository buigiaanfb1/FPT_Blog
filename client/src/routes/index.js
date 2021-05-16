import Detail from '../layouts/HomeTemplate/Detail';
import FptShare from '../layouts/HomeTemplate/FptShare';
import Frontend from '../layouts/HomeTemplate/Frontend';
import Backend from '../layouts/HomeTemplate/Backend';
import Home from './../layouts/HomeTemplate/Home';
import Discussion from './../layouts/HomeTemplate/Discussion';
export const routesHome = [
  {
    exact: true,
    path: '/fpt',
    component: FptShare,
  },
  {
    exact: true,
    path: '/frontend',
    component: Frontend,
  },
  {
    exact: true,
    path: '/backend',
    component: Backend,
  },
  {
    exact: false,
    path: '/:slug',
    component: Detail,
  },
  {
    exact: true,
    path: '/',
    component: Home,
  },
];

export const routesAdmin = [
  {
    exact: false,
    path: '/admin',
  },
];

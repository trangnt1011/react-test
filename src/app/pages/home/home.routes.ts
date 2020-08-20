import React from 'react';

const Home = React.lazy(() => import('./Home'));

const homeRoutes = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/home',
    component: Home
  }
];

export default homeRoutes;

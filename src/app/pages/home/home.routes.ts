import React from 'react';

const Home = React.lazy(() => import('./Home'));

const homeRoutes = [
  {
    path: '/',
    component: Home,
    exact: true
  }
];

export default homeRoutes;

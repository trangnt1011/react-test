import React from 'react';

const ArticleDetail = React.lazy(() => import('./containers/ArticleDetail'));
const ArticleList = React.lazy(() => import('./containers/ArticleList'));

const articleRoutes = [
  {
    path: '/articles',
    element: ArticleList,
    exact: true
  },
  {
    path: '/articles/:id',
    element: ArticleDetail
  }
];

export default articleRoutes;

import React from 'react';

const ArticleDetail = React.lazy(() => import('./article-detail/ArticleDetail'));
const ArticleList = React.lazy(() => import('./article-list/ArticleList'));
const Articles = React.lazy(() => import('./Articles'));

const articleRoutes = [
  {
    path: '/articles',
    element: Articles,
    routes: [
      {
        path: '/articles',
        element: ArticleList,
        exact: true
      },
      {
        path: '/articles/:id',
        element: ArticleDetail
      }
    ]
  }
];

export default articleRoutes;

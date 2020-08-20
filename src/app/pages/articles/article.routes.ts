import React from 'react';

const ArticleDetail = React.lazy(() => import('./article-detail/ArticleDetail'));
const ArticleList = React.lazy(() => import('./article-list/ArticleList'));
const Articles = React.lazy(() => import('./Articles'));

const articleRoutes = [
  {
    path: '/articles',
    component: Articles,
    routes: [
      {
        path: '',
        component: ArticleList,
        exact: true
      },
      {
        path: ':id',
        component: ArticleDetail
      }
    ]
  }
];

export default articleRoutes;

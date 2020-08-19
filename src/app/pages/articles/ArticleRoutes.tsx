import React from 'react';
import { useRoutes } from 'react-router-dom';

import ArticleDetail from './article-detail/ArticleDetail';
import ArticleList from './article-list/ArticleList';
import Articles from './Articles';

export default function ArticleRoutes() {
  const element = useRoutes([
    {
      path: 'articles',
      element: <Articles />,
      children: [
        { path: '', element: <ArticleList /> },
        { path: ':id', element: <ArticleDetail /> }
      ]
    }
  ]);

  return element;
}

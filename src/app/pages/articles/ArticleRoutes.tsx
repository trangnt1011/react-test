import React from 'react';
import { useRoutes } from 'react-router-dom';

import ArticleDetail from './article-detail/ArticleDetail';
import ArticleList from './article-list/ArticleList';

export default function ArticleRoutes() {
  const element = useRoutes([
    { path: '', element: <ArticleList /> },
    { path: ':id', element: <ArticleDetail /> }
  ]);

  return element;
}

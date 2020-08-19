import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import ArticleRoutes from './article/ArticleRoutes';
import Home from './home/containers/Home';
import HomeRoutes from './home/HomeRoutes';

export default function PagesRoutes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact={true} path="/" component={Home} />
      </Switch>
      <HomeRoutes />
      <ArticleRoutes />
    </Suspense>
  );
}

import React from 'react';
import { Route, Switch } from 'react-router-dom';

const ArticleList = React.lazy(() => import('./containers/ArticleList'));
const ArticleDetail = React.lazy(() => import('./containers/ArticleDetail'));

export default function ArticleRoutes() {
  return (
    <Switch>
      <Route exact={true} path="/articles" component={ArticleList} />
      <Route path="/articles/:id" component={ArticleDetail} />
    </Switch>
  );
}

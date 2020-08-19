import React from 'react';
import { Route, Switch } from 'react-router-dom';

const Home = React.lazy(() => import('./containers/Home'));

export default function HomeRoutes() {
  return (
    <Switch>
      <Route path="/home" component={Home} />
    </Switch>
  );
}


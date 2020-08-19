import React from 'react';
import { Route, Switch } from 'react-router-dom';

const PagesRoutes = React.lazy(() => import('./pages/PagesRoutes'));

export default function Routes() {
  return (
    <div>
      <Switch>
        <PagesRoutes />
      </Switch>
    </div>
  );
}

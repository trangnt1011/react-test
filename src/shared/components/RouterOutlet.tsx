import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

const RouterOutlet = ({ routes }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        {
          routes.map((route: any, index: number) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              render={props => (
                <route.element {...props} routes={route.routes} />
              )}
            />
          ))
        }
      </Switch>
    </Suspense>
  );
};

export default RouterOutlet;

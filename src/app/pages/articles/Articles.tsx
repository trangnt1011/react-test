import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

const Articles = ({ routes }) => {
  return (
    <div>
      <p>This is Articles pages</p>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          {
            routes.map((route: any, index: number) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
              >
                <route.element />
              </Route>
            ))
          }
        </Switch>
      </Suspense>
    </div>
  );
};

export default Articles;

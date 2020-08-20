import React, { Suspense } from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import appRoutes from './app.routes';

ReactDOM.render(
  <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        {
          appRoutes.map((route: any, index: number) => (
            <Route
              key={index}
              exact={route.exact}
              path={route.path}
              render={props => (
                <route.component {...props} routes={route.routes} />
              )}
            />
          ))
        }
      </Switch>
    </Suspense>
  </BrowserRouter>,
  document.getElementById('root')
);

import React, { Suspense } from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

// import FeatureRoutes from './pages/FeatureRoutes';
import appRoutes from './app.routes';

ReactDOM.render(
  <BrowserRouter>
    {/* <FeatureRoutes /> */}
    { appRoutes.map((route: any, index: number) => (
      <Route key={index} exact={route.exact} path={route.path}>
        <route.component />
      </Route>
    ))}
  </BrowserRouter>,
  document.getElementById('root')
);

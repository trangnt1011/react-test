import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { privateRoute } from './PrivateRoute';

function renderRoute(routes) {
  return routes.map((route: any, index: number) => {
    const PrivateRoute = privateRoute(route.element);
    return (
      <Route
        key={index}
        path={route.path}
        element={
          route.isProtected ?
          PrivateRoute :
          <route.element/>
        }
      >
        { route.children && renderRoute(route.children) }
      </Route>
    );
  });
}

export const RouterOutlet = ({routes}) => {
  return (
    <Routes>
      { renderRoute(routes) }
    </Routes>
  );
};

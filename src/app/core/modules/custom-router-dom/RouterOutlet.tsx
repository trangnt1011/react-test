import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { AuthProtector } from './AuthProtector';

function renderRoute(routes) {
  return routes.map((route: any, index: number) => {
    return (
      <Route
        key={index}
        path={route.path}
        element={
          route.isProtected ?
          <AuthProtector Component={route.element} /> :
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

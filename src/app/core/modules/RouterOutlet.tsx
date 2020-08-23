import React from 'react';
import { Route, Routes } from 'react-router-dom';

function renderRoute(routes) {
  return routes.map((route: any, index: number) => {
    return (
      <Route
        key={index}
        path={route.path}
        element={ <route.element/> }
      >
        { route.children && renderRoute(route.children) }
      </Route>
    );
  });
}

const RouterOutlet = ({routes}) => {
  return (
    <Routes>
      { renderRoute(routes) }
    </Routes>
  );
};

export default RouterOutlet;

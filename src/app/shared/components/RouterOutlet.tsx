import React from 'react';
import { Route, Routes } from 'react-router-dom';

function hasChildren(route: any) {
  return route.children ? true : false;
}

const RouterOutlet = ({ routes }) => {
  return (
    <Routes>
      {
        routes.map((route: any, index: number) => {
          return (
            <Route
              key={index}
              path={route.path}
              element={ <route.element/> }
            >
              { hasChildren(route) && <RouterOutlet routes={route.children} /> }
            </Route>
          );
        })
      }
    </Routes>
  );
};

export default RouterOutlet;

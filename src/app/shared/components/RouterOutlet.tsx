import React from 'react';
import { Route, Routes } from 'react-router-dom';

const RouterOutlet = ({ routes }) => {
  return (
    <Routes>
      {
        routes.map((route: any, index: number) => (
          <Route
            key={index}
            path={route.path}
            element={ <route.element routes={route.children} />}
          />
        ))
      }
    </Routes>
  );
};

export default RouterOutlet;

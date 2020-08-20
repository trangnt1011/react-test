import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const RouterOutlet = ({ routes }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {
          routes.map((route: any, index: number) => (
            <Route
              key={index}
              path={route.path}
            >
              <route.element />
            </Route>
          ))
        }
      </Routes>
    </Suspense>
  );
};

export default RouterOutlet;

import React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Footer, Header } from '@shared/components/layout/index';
import appRoutes from './app.routes';

ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Routes>
      {
        appRoutes.map((route: any, index: number) => (
          <Route key={index} path={route.path}>
            <route.element />
            {
              route?.children?.map((subRoute: any, subIndex: number) => (
                <Route key={subIndex} path={subRoute.path}>
                  <subRoute.element />
                </Route>
              ))
            }
          </Route>
        ))
      }
    </Routes>
    <Footer />
  </BrowserRouter>,
  document.getElementById('root')
);

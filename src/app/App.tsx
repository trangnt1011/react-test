import React, { Suspense } from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import AppRoutes from './AppRoutes';
// import Features from './pages/Features';

ReactDOM.render(
  <BrowserRouter>
    <h1>React Typescript Boilerplate</h1>
    <AppRoutes />
  </BrowserRouter>,
  document.getElementById('root')
);

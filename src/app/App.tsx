import React, { Suspense } from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Features from './pages/Features';

ReactDOM.render(
  <BrowserRouter>
    <h1>React Typescript Boilerplate</h1>
    <Features />
  </BrowserRouter>,
  document.getElementById('root')
);

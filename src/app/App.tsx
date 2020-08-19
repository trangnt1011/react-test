import React, { Suspense } from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import AppRoutes from './AppRoutes';

ReactDOM.render(
  <Router>
    <h1>React Typescript Boilerplate</h1>
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <AppRoutes/>
      </Suspense>
    </Router>
  </Router>,
  document.getElementById('root')
);

import React, { Suspense } from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import FeatureRoutes from './pages/FeatureRoutes';

ReactDOM.render(
  <BrowserRouter>
    <FeatureRoutes />
  </BrowserRouter>,
  document.getElementById('root')
);

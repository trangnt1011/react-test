import React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import RouterOutlet from '@shared/components/RouterOutlet';
import appRoutes from './app.routes';

ReactDOM.render(
  <BrowserRouter>
    <RouterOutlet routes={appRoutes}/>
  </BrowserRouter>,
  document.getElementById('root')
);

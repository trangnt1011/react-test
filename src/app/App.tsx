import React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { Footer, Header } from '@shared/components/layout/index';
import RouterOutlet from '@shared/components/RouterOutlet';
import appRoutes from './app.routes';

ReactDOM.render(
  <BrowserRouter>
    <Header />
    <RouterOutlet routes={appRoutes}/>
    <Footer />
  </BrowserRouter>,
  document.getElementById('root')
);

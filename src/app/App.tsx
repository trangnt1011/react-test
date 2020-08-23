import React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger';

import { Footer, Header } from '@shared/components/layout/index';
import RouterOutlet from '@shared/components/RouterOutlet';
import appRoutes from './app.routes';
import appMiddleware from './app.middleware';
import appReducer from './app.reducers';

const middleware = createSagaMiddleware();
const store = createStore(
  appReducer,
  applyMiddleware(middleware, logger)
);

middleware.run(appMiddleware);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <Routes>
        <RouterOutlet routes={appRoutes} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

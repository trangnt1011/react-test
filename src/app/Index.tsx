import React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import { logger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import reducer from '@app/stores/reducer';
import saga from '@app/stores/saga';

const middleware = createSagaMiddleware();
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(middleware, logger)),
);

middleware.run(saga);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <h1>React Typescript Boilerplate</h1>
    </Router>
  </Provider>,
  document.getElementById('root')
);

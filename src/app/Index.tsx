import React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import { logger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

ReactDOM.render(
  <Router>
    <h1>React Typescript Boilerplate</h1>
  </Router>,
  document.getElementById('root')
);

import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {applyMiddleware, createStore, combineReducers} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import {reducers as moviesReducers} from './movies/Movies';
import {Application} from './Application';
import 'semantic-ui-css/semantic.min.css';

const middleware = applyMiddleware(promise(), thunk, logger);

const appReducers = {
  ...moviesReducers,
};

const store = createStore(
  combineReducers(appReducers),
  middleware
);

render(
  <Application store={store} />,
  document.getElementById('root')
);

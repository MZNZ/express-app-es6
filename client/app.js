import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {applyMiddleware, createStore, combineReducers} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
// import {reducers as hostCalendarReducers} from './host/Host';
// import {reducers as intlReducers} from './intl/Intl';
import {Application} from './Application';
import 'semantic-ui-css/semantic.min.css';

const middleware = applyMiddleware(promise(), thunk, logger);

const appReducers = {
  // ...intlReducers,
};

const store = createStore(
  combineReducers(appReducers),
  middleware
);

render(
  <Application store={store} />,
  document.getElementById('root')
);

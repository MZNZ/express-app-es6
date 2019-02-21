import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {applyMiddleware, createStore, combineReducers} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import {reducers as moviesReducers} from './movies/Movies';
import {reducers as loginReducers} from './login/Login';
import {reducers as postsReducers} from './posts/Posts';
import {Application} from './Application';

const middleware = applyMiddleware(promise(), thunk, logger);

const appReducers = {
  ...moviesReducers,
  ...loginReducers,
  ...postsReducers,
};

const store = createStore(
  combineReducers(appReducers),
  middleware
);

store.subscribe(() => {
  console.log(store.getState());
});

render(
  <Application store={store} />,
  document.getElementById('root')
);

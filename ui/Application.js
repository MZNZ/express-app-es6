import React from 'react';
import {Provider} from 'react-redux';
import PropTypes from 'prop-types';
import {Route, HashRouter} from 'react-router-dom';
import MoviesPage from './MoviesPage';
import LoginPage from './LoginPage';
import PostsPage from './PostsPage';
import './Application.less';

/**
 * Application COMPONENT (PRESENTATION)
 *
 * Properties:
 * - store {ReduxStore} redux store instance
 *
 * @return {Dom} Application root dom element
 */
export const Application = ({store}) => {
  return (
    <Provider store={store}>
      <HashRouter>
        <div>
          <Route path="/" component={LoginPage} exact/>
          <Route path="/posts" component={PostsPage} />
        </div>
      </HashRouter>
    </Provider>
  );
};

Application.propTypes = {
  store: PropTypes.object.isRequired,
};

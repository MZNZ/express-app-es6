import React from 'react';
import {Provider} from 'react-redux';
import PropTypes from 'prop-types';
import {BrowserRouter, Route} from 'react-router-dom';
import MoviesPage from './MoviesPage';
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
      <BrowserRouter>
        <div>
          <Route path="/" component={MoviesPage} exact/>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

Application.propTypes = {
  store: PropTypes.object.isRequired,
};

import {connect} from 'react-redux';
import * as reducers from './MoviesReducers';
import * as actions from './MoviesActions';
import MoviesApp from './MoviesApp';

/**
 * Map properties to calendar app component
 *
 * @param  {Object} state redux store host calendar state
 * @return {Object}       object contains properties mapped to presentation
 *                        component
 */
export const mapStateToPropsMoviesApp = (state) => {
  const {
    movieList,
  } = state.movies;
  return {
    movieList,
  };
};

/**
 * Map functions to calendar side bar component
 *
 * @param  {Function} dispatch redux store dispatch method
 * @return {Object}            object contains properties mapped to presentation
 *                             component
 */
export const mapDispatchToPropsMoviesApp = (dispatch) => {
  return {
    onMovieListLoad: () => {
      dispatch(actions.changeMovieList([{molly: 1}]));
    },
  };
};

// Container components
const MoviesAppContainer = connect(
  mapStateToPropsMoviesApp,
  mapDispatchToPropsMoviesApp,
)(MoviesApp);

export {
  MoviesAppContainer,
  reducers,
  actions,
}
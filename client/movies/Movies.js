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
    httpStatusCode,
  } = state.movies;
  return {
    movieList,
    httpStatusCode,
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
      const as = async () => {
        const response = await fetch('http://localhost:3000/api/movies', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        });
        const httpStatusCode = response.status;
        if (httpStatusCode === 200) {
          const movieList = await response.json();
          dispatch(actions.changeMovieList({
            movieList,
            httpStatusCode,
          }));
        } else {
          dispatch(actions.changeMovieList({httpStatusCode}));
        }
      };

      as();
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
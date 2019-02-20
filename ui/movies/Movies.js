import {connect} from 'react-redux';
import * as reducers from './MoviesReducers';
import * as actions from './MoviesActions';
import MoviesApp from './MoviesApp';
import {Search} from '../widget/Widget';
import Pagination from '../widget/Pagination';

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
          const movieListData = await response.json();
          dispatch(actions.changeMovieList({
            cachedMovieList: movieListData,
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

/**
 * Map properties to calendar app component
 *
 * @param  {Object} state redux store host calendar state
 * @return {Object}       object contains properties mapped to presentation
 *                        component
 */
export const mapStateToPropsSearch = (state) => {
  const {
    keyword,
    result,
  } = state.movies;
  return {
    keyword,
    result,
  };
};

/**
 * Map functions to calendar side bar component
 *
 * @param  {Function} dispatch redux store dispatch method
 * @return {Object}            object contains properties mapped to presentation
 *                             component
 */
export const mapDispatchToPropsSearch = (dispatch) => {
  return {
    onSubmitSearch: (keyword) => {
      dispatch(actions.changeSearchKeyword({keyword}));
    },
    onResetList: () => {
      dispatch(actions.resetList());
    },
  };
};

/**
 * Map properties to calendar app component
 *
 * @param  {Object} state redux store host calendar state
 * @return {Object}       object contains properties mapped to presentation
 *                        component
 */
export const mapStateToPropsPagination = (state) => {
  const {
    currentPage,
    numOfPages,
  } = state.movies;
  return {
    currentPage,
    numOfPages,
  };
};

/**
 * Map functions to calendar side bar component
 *
 * @param  {Function} dispatch redux store dispatch method
 * @return {Object}            object contains properties mapped to presentation
 *                             component
 */
export const mapDispatchToPropsPagination = (dispatch) => {
  return {
    onGoTo: (pageNumber) => {
      dispatch(actions.changePage(pageNumber));
    },
  };
};

// Container components
const MoviesAppContainer = connect(
  mapStateToPropsMoviesApp,
  mapDispatchToPropsMoviesApp,
)(MoviesApp);

const SearchContainer = connect(
  mapStateToPropsSearch,
  mapDispatchToPropsSearch,
)(Search);

const PaginationContainer = connect(
  mapStateToPropsPagination,
  mapDispatchToPropsPagination,
)(Pagination);

export {
  MoviesAppContainer,
  SearchContainer,
  PaginationContainer,
  reducers,
  actions,
}
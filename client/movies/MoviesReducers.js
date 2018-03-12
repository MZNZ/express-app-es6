import {
  CHANGE_MOVIELIST,
  CHANGE_SEARCH_KEYWORD,
  CHANGE_PAGE,
  RESET_LIST,
} from './MoviesActions';
import {Common} from './util/Util';

const moviesInitState = {
  httpStatusCode: null,
  cachedMovieList: [],
  movieList: [],
  keyword: '',
  currentPage: 1,
  numOfPages: 0,
  numOfRowPerPage: 1000,
};
/**
 * Movies reducer
 *
 * @param  {Object} state  redux store state
 * @param  {Object} action the action which will be sent to reducer
 * @return {Object}        redux store state
 */
export const movies = (state = moviesInitState, action) => {
  const payload = action.payload;
  let newState;

  switch (action.type) {
    case CHANGE_MOVIELIST:
      const {movieListData, cachedMovieList} = payload;
      const numOfRowPerPage = state.numOfRowPerPage;
      newState = {
        cachedMovieList: cachedMovieList,
        movieList: cachedMovieList.slice(0, numOfRowPerPage),
        httpStatusCode: payload.httpStatusCode,
        numOfPages: Math.ceil(cachedMovieList.length / numOfRowPerPage),
      };
      return {...state, ...newState};
    case CHANGE_SEARCH_KEYWORD:
      const {keyword, searchType} = payload;
      const movieList = state.movieList.filter((m) => {
        if (searchType === 'title' && m.title)
          return m.title.includes(keyword);
        if (searchType === 'genre' && m.genre)
          return m.genre.includes(keyword);
      });

      newState = {
        movieList,
        currentPage: 1,
        numOfPages: movieList.length / state.numOfRowPerPage,
      };
      return {...state, ...newState};
    case CHANGE_PAGE:
      const begin = (payload - 1) * state.numOfRowPerPage;
      newState = {
        currentPage: payload,
        movieList: state.cachedMovieList.
          slice(begin, begin + state.numOfRowPerPage),
      };
      return {...state, ...newState};
    case RESET_LIST:
      newState = {
        movieList: state.cachedMovieList.slice(0, state.numOfRowPerPage),
        currentPage: 1,
        numOfPages:
          Math.ceil(state.cachedMovieList.length / state.numOfRowPerPage),
      };
      return {...state, ...newState};
    default:
      return state;
  }
};
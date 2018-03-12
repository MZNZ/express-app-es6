import {
  CHANGE_MOVIELIST
} from './MoviesActions';
import {Common} from './util/Util';

const moviesInitState = {
  httpStatusCode: null,
  movieList: [],
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
      newState = Common.getDeepCopy(payload);
      return {...state, ...newState};
    default:
      return state;
  }
};
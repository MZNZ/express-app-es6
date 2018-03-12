export const CHANGE_MOVIELIST = 'CHANGE_MOVIELIST';

export const changeMovieList = (payload) => {
  return {
    type: CHANGE_MOVIELIST,
    payload,
  };
};
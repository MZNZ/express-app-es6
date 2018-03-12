export const CHANGE_MOVIELIST = 'CHANGE_MOVIELIST';
export const CHANGE_SEARCH_KEYWORD = 'CHANGE_SEARCH_KEYWORD';

export const changeMovieList = (payload) => {
  return {
    type: CHANGE_MOVIELIST,
    payload,
  };
};

export const changeSearchKeyword = (payload) => {
  return {
    type: CHANGE_SEARCH_KEYWORD,
    payload,
  };
};
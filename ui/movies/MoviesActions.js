export const CHANGE_MOVIELIST = 'CHANGE_MOVIELIST';
export const CHANGE_SEARCH_KEYWORD = 'CHANGE_SEARCH_KEYWORD';
export const CHANGE_PAGE = 'CHANGE_PAGE';
export const RESET_LIST = 'RESET_LIST';

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

export const changePage = (payload) => {
  return {
    type: CHANGE_PAGE,
    payload,
  };
};

export const resetList = (payload) => {
  return {
    type: RESET_LIST,
    payload,
  };
};
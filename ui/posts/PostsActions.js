export const changePostsList = (posts) => {
  return {
    type: 'CHANGE_POSTS_LIST',
    payload: posts,
  }
};

export const changeHttpStatusCode = (httpStatusCode) => {
  return {
    type: 'CHANGE_HTTP_STATUS_CODE',
    payload: httpStatusCode,
  }
};
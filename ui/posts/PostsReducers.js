const postsInitState = {
  httpStatusCode: null,
  posts: [],
};

export const posts = (state = postsInitState, {type, payload}) => {
  let newState;
  switch (type) {
    case 'CHANGE_POSTS_LIST':
      newState = {posts: payload}
      return {...state, ...newState};
    case 'CHANGE_HTTP_STATUS_CODE':
      newState = {httpStatusCode: payload}
      return {...state, ...newState};
    default:
      return state;
  }
};
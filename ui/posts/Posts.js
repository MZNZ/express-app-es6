import {connect} from 'react-redux';
import * as actions from './PostsActions';
import * as reducers from './PostsReducers';
import PostsApp from './PostsApp';

const mapStateToPropsPostsApp = (state) => {
  const {posts} = state.posts;
  return {posts};
};

const mapDispatchToPropsPostsApp = (dispatch) => {
  return {
    onPostsLoad: () => {
      const as = async () => {
        const postsResponse = await fetch('/post/allPosts', {
          method: 'GET',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const httpStatusCode = postsResponse.status;

        if (httpStatusCode === 200) {
          dispatch(actions.changePostsList(await postsResponse.json()));
          dispatch(actions.changeHttpStatusCode(httpStatusCode));
        } else {
          dispatch(actions.changeHttpStatusCode(httpStatusCode));
        }
      };
      as();
    },
  }
};

const PostsPageContainer = connect(
  mapStateToPropsPostsApp,
  mapDispatchToPropsPostsApp,
)(PostsApp);

export {
  PostsPageContainer,
  actions,
  reducers,
};
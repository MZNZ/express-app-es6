import React from 'react';
import PropTypes from 'prop-types';

class PostsApp extends React.Component {
  componentDidMount() {
    this.props.onPostsLoad();
  }

  render() {
    const {posts} = this.props;

    return (
      <ul>
        {posts.map(post => <li key={post._id}>{post.title}</li>)}
      </ul>
    );
  }
}

PostsApp.propTypes = {
  posts: PropTypes.array.isRequired,
  onPostsLoad: PropTypes.func.isRequired,
};

export default PostsApp;
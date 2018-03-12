import React from 'react';
import PropTypes from 'prop-types';

class MoviesApp extends React.Component{
  constructor(props) {
    super(props);
    props.onMovieListLoad();
  }
  render() {
    return (
      <div>Movies List</div>
    );
  }
}

MoviesApp.propTypes = {
  onMovieListLoad: PropTypes.func.isRequired,
};

export default MoviesApp;
import React from 'react';
import PropTypes from 'prop-types';
import {DivTable} from  '../widget/Widget';

class MoviesApp extends React.Component{
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.onMovieListLoad();
  }
  render() {
    const props = this.props;
    return (
      <div>
        <DivTable
          tableData={props.movieList}
        />
      </div>
    );
  }
}

MoviesApp.propTypes = {
  onMovieListLoad: PropTypes.func.isRequired,
  movieList: PropTypes.array.isRequired,
};

export default MoviesApp;
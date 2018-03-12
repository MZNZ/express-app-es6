import React from 'react';
import PropTypes from 'prop-types';
import './Pagination.less';

class Pagination extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    const props = this.props;
    const onGoTo = props.onGoTo;
    const currentPage = props.currentPage;
    const numOfPages = props.numOfPages;
    const prevPage = currentPage - 1;
    const nextPage = currentPage + 1;

    return (
      <div className="pagination">
        {
          Boolean(prevPage) &&
          <a href="#"
            onClick={() => onGoTo(prevPage)}
          >&laquo;</a>
        }
        <a>{currentPage}</a>
        {
          nextPage <= numOfPages &&
          <a href="#"
            onClick={() => onGoTo(nextPage)}
          >&raquo;</a>
        }

      </div>
    );
  }
}

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  onGoTo: PropTypes.func.isRequired,
  numOfPages: PropTypes.number.isRequired,
};

export default Pagination;

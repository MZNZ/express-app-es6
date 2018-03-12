import React from 'react';
import PropTypes from 'prop-types';

class DivTableRow extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    const props = this.props;
    const rowData = props.rowData;
    const columnsDom = [];
    Object.keys(rowData).forEach((d, index) => {
      columnsDom.push(<div className="divTableCell" key={index}>{rowData[d]}</div>);
    });
    return (
      <div className="divTableRow">
        {columnsDom}
      </div>
    );
  }
}

DivTableRow.propTypes = {
  rowData: PropTypes.object.isRequired,
};

export default DivTableRow;

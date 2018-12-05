import React from 'react';
import PropTypes from 'prop-types';
import DivTableRow from './DivTableRow';
import './DivTable.less';

class DivTable extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    const props = this.props;
    const tableData = props.tableData || [];
    const rowsDom = [];
    for (let i = 0; i < tableData.length; i++) {
      rowsDom.push(
        <DivTableRow
          key={i}
          rowData={tableData[i]}
        />
      );
    }
    return (
      <div className="divTable">
        <div className="divTableBody">
          {rowsDom}
        </div>
      </div>
    );
  }
}

DivTable.propTypes = {
  tableData: PropTypes.array.isRequired,
};

export default DivTable;

import React from 'react';
import PropTypes from 'prop-types';

class RadioInput extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <input type="radio" name="group1" id="r1" value="1" /><label for="r1"> Movie Name</label>
      </div>
    );
  }
}

MoviesApp.propTypes = {
  isChecked: propTypes.bool.isRequired,

};

export default MoviesApp;
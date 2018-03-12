import React from 'react';
import PropTypes from 'prop-types';

class Search extends React.Component{
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const searchString = this.state.value;
    if (searchString.length) this.props.onSubmitSearch(this.state.value);
  }

  render() {
    return (
      <form className="example" onSubmit={this.handleSubmit}>
        <input type="text"
          placeholder="Search.."
          name="search"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }

  componentWillUpdate(nextProps, nextState) {
    if (!nextState.value.length) {
      this.props.onResetList();
    }
  }
}

Search.propTypes = {
  onSubmitSearch: PropTypes.func.isRequired,
  onResetList: PropTypes.func.isRequired,
};

export default Search;
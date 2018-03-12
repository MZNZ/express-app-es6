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
    this.props.onSubmitSearch(this.state.value);
    this.setState({value:''});
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
}

Search.propTypes = {
  onSubmitSearch: PropTypes.func.isRequired,
};

export default Search;
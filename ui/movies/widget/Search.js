import React from 'react';
import PropTypes from 'prop-types';
import './Search.less';

class Search extends React.Component{
  constructor(props) {
    super(props);
    this.state = {title: '', genre: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const state = this.state;
    const searchKeywords = {};

    Object.keys(state).forEach((key) => {
      if (state[key].length) {
        searchKeywords[key] = this.state[key];
      }
    });
    this.props.onSubmitSearch(searchKeywords);
  }

  handleReset(event) {
    event.preventDefault();
    this.setState({title: '', genre: ''});
    this.props.onResetList();
  }

  render() {
    return (
      <form className="example" onSubmit={this.handleSubmit}>
        Search By Title:<input type="text"
          className="search-input"
          placeholder="Enter TITLE"
          name="title"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <span className="search-input"><b>OR</b></span>
        Search By Genre:<input type="text"
          className="search-input"
          placeholder="Enter Genre"
          name="genre"
          value={this.state.genre}
          onChange={this.handleChange}
        />
        <input className="search-input" type="submit" value="Submit" />
        <input className="search-input" type="submit" value="Reset" onClick={this.handleReset}/>
      </form>
    );
  }
}

Search.propTypes = {
  onSubmitSearch: PropTypes.func.isRequired,
  onResetList: PropTypes.func.isRequired,
};

export default Search;
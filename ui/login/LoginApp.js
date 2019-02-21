import React, {Fragment} from 'react';
import { Redirect } from 'react-router'
import PropTypes from 'prop-types';

class LoginApp extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const {email, password} = this.state;
    this.props.onLoginSubmit(email, password);
  }

  render() {
    const {httpStatusCode} = this.props;
    const {email, password} = this.state;
    return (
      <Fragment>
        <form
          // onSubmit={() => this.props.onLoginSubmit(email, password, history)}
          onSubmit={this.handleSubmit}
        >
          <input
            type="text"
            name="email"
            autoComplete="email"
            value={email}
            onChange={this.handleChange}/>
          <br></br>
          <input
            type="password"
            name="password"
            autoComplete="password"
            value={password}
            onChange={this.handleChange}/>
          <br></br>
          <input type="submit" value="Submit"/>
        </form>
        {httpStatusCode === 200 && <Redirect push to="/posts"/>}
      </Fragment>
    );
  }
}

LoginApp.propTypes = {
  httpStatusCode: PropTypes.any,
  onLoginSubmit: PropTypes.func.isRequired,
};

export default LoginApp;
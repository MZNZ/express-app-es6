import {connect} from 'react-redux';
import * as reducers from './LoginReducers';
import * as actions from './LoginActions';
import LoginApp from './LoginApp';

/**
 * Map properties to LoginApp component
 *
 * @param  {Object} state redux store host calendar state
 * @return {Object}       object contains properties mapped to presentation
 *                        component
 */
export const mapStateToPropsLogin = (state) => {
  const {httpStatusCode} = state.login;
  return {httpStatusCode};
};

/**
 * Map functions to LoginApp component
 *
 * @param  {Function} dispatch redux store dispatch method
 * @return {Object}            object contains properties mapped to presentation
 *                             component
 */
export const mapDispatchToPropsLogin = (dispatch) => {
  return {
    onLoginSubmit: ({email, password}) => {
      const as = async () => {
        const authResponse = await fetch('/auth/login', {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({email, password}),
        });

        dispatch(actions.changeHttpStatusCode(authResponse.status));
      }
      as();
    },
  };
};

// Container components
const LoginAppContainer = connect(
  mapStateToPropsLogin,
  mapDispatchToPropsLogin,
)(LoginApp);

export {
  LoginAppContainer,
  reducers,
  actions,
}
import React from 'react';
import {
  LoginAppContainer,
} from './login/Login';

/**
 * LOGINPAGE COMPONENT (PRESENTATION)
 *
 * @return {Dom} login page dom element
 */
const LoginPage = () => {
  return (
    <div className="login-page">
      <LoginAppContainer />
    </div>
  );
};

export default LoginPage;

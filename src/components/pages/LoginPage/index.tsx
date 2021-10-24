import React from 'react';
import './style.scss';
import LogInForm from '../../organisms/LogInForm';
import LoginTempalate from '../../templates/LoginTemplate';
import loginDecor from '../../../images/login-decor.png';

const LoginPage = (props: React.ReactNode | React.ReactNode[]) => {
  return (
    <LoginTempalate
      left={<LogInForm className="login-logo" />}
      right={<img src={loginDecor} alt="login page decor"></img>}
    />
  );
};

export default LoginPage;

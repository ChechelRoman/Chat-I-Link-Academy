import React from 'react';
import './style.scss';
import { LogInForm } from '../../organisms/LogInForm';
import { LoginTemplate } from '../../templates/LoginTemplate';
import loginDecor from '../../../images/login-decor.png';

export const LoginPage: React.FC = () => {
  return (
    <LoginTemplate
      left={<LogInForm type="login-logo" />}
      right={<img src={loginDecor} alt="login page decor"></img>}
    />
  );
};

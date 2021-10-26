import React from 'react';
import logo from '../../../images/logo.png';
import './style.scss';

type LogoProps = {
  type: 'login-logo' | 'chat-logo';
};

export const Logo: React.FC<LogoProps> = ({ type }) => {
  return <img className={type} src={logo} alt="logo" />;
};

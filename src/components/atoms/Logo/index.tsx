import React from 'react';
import logo from '../../../images/logo.svg';
import './style.scss';

interface LogoProps {
  type: 'login_logo' | 'chat_logo';
}

export const Logo: React.FC<LogoProps> = ({ type }) => {
  return <img className={type} src={logo} alt="logo" />;
};

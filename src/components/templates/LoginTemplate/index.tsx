import React from 'react';
import './style.scss';

type LoginPageTempalateProps = {
  left: React.ReactNode | React.ReactNode[];
};

export const LoginTemplate: React.FC<LoginPageTempalateProps> = ({ left }) => {
  return (
    <div className="login-page-template">
      <div className="login-page-template__left">{left}</div>
      <div className="login-page-template__right"></div>
    </div>
  );
};

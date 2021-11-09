import React from 'react';
import './style.scss';

type LoginTempalateProps = {
  left: React.ReactNode | React.ReactNode[];
};

export const LoginTemplate: React.FC<LoginTempalateProps> = ({ left }) => {
  return (
    <div className="login-page-template">
      <div className="login-page-template__left">{left}</div>
      <div className="login-page-template__right"></div>
    </div>
  );
};

import React from 'react';
import './style.scss';

type LoginPageTempalateProps = {
  left: React.ReactNode | React.ReactNode[];
  right: React.ReactNode | React.ReactNode[];
};

const LoginPageTempalate = (props: LoginPageTempalateProps) => {
  const { left, right } = props;

  return (
    <div className="login-page-template">
      <div className="login-page-template__left">{left}</div>
      <div className="login-page-template__right">{right}</div>
    </div>
  );
};

export default LoginPageTempalate;

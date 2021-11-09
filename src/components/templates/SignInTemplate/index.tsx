import React from 'react';
import './style.scss';

type SignInTempalateProps = {
  left: React.ReactNode | React.ReactNode[];
};

export const SignInTemplate: React.FC<SignInTempalateProps> = ({ left }) => {
  return (
    <div className="sign-page-template">
      <div className="sign-page-template__left">{left}</div>
      <div className="sign-page-template__right"></div>
    </div>
  );
};

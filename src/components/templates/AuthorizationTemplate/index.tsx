import React from 'react';
import './style.scss';

type AuthorizationTemplateProps = {
  left: React.ReactNode | React.ReactNode[];
};

export const AuthorizationTemplate: React.FC<AuthorizationTemplateProps> = ({
  left,
}) => {
  return (
    // <div className="container">
    <div className="authorization-page-template">
      <div className="authorization-page-template__left">{left}</div>
      <div className="authorization-page-template__right"></div>
    </div>
    // </div>
  );
};

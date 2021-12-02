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
    <div className="authorization_page_template">
      <div className="authorization_page_template__left">{left}</div>
      <div className="authorization_page_template__right"></div>
    </div>
    // </div>
  );
};

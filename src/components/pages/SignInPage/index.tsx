import React from 'react';
import './style.scss';
import { AuthorizationTemplate } from '../../templates/AuthorizationTemplate';
import { SignInForm } from '../../organisms/SignInForm';

export const SignInPage: React.FC = () => {
  return <AuthorizationTemplate left={<SignInForm />} />;
};

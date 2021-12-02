import React from 'react';
import './style.scss';
import { useEffect } from 'react';
import { AuthorizationTemplate } from '../../templates/AuthorizationTemplate';
import { SignInForm } from '../../organisms/SignInForm';

export const SignInPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Chat Sign In';
  });
  return <AuthorizationTemplate left={<SignInForm />} />;
};

import React from 'react';
import './style.scss';
import { useEffect } from 'react';
import { LogInForm } from '../../organisms/LogInForm';
import { AuthorizationTemplate } from '../../templates/AuthorizationTemplate';

export const LoginPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Chat Login';
  });
  return <AuthorizationTemplate left={<LogInForm />} />;
};

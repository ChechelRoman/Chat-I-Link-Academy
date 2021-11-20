import React from 'react';
import './style.scss';
import { LogInForm } from '../../organisms/LogInForm';
import { AuthorizationTemplate } from '../../templates/AuthorizationTemplate';

export const LoginPage: React.FC = () => {
  return <AuthorizationTemplate left={<LogInForm />} />;
};

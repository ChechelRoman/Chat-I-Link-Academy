import React from 'react';
import './style.scss';
import { LogInForm } from '../../organisms/LogInForm';
import { LoginTemplate } from '../../templates/LoginTemplate';

export const LoginPage: React.FC = () => {
  return <LoginTemplate left={<LogInForm />} />;
};

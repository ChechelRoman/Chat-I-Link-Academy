import React from 'react';
import './style.scss';
import { SignInTemplate } from '../../templates/SignInTemplate';
import { SignInForm } from '../../organisms/SignInForm';

export const SignInPage: React.FC = () => {
  return <SignInTemplate left={<SignInForm />} />;
};

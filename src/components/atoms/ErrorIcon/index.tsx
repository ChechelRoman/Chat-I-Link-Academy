import React from 'react';
import errorIcon from '../../../images/error-icon.svg';
import './style.scss';

export const ErrorIcon: React.FC = () => {
  return <img className="error-icon" src={errorIcon} alt="error icon" />;
};

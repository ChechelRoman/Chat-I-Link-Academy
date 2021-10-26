import React from 'react';
import errorIcon from '../../../images/icon-error.png';
import './style.scss';

type ErrorIconProps = React.ImgHTMLAttributes<HTMLImageElement>;

export const ErrorIcon: React.FC<ErrorIconProps> = () => {
  return <img className="error-icon" src={errorIcon} alt="error icon" />;
};

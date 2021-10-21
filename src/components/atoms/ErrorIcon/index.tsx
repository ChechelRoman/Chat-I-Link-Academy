import React from 'react';
import cn from 'classnames';
import errorIcon from '../../../images/icon-error.png';
import './style.scss';

type ErrorIconProps = React.ImgHTMLAttributes<HTMLImageElement>;

const ErrorIcon = (props: ErrorIconProps) => {
  const { className, ...otherProps } = props;

  const classes = cn(className, 'error-icon');

  return (
    <img className={classes} src={errorIcon} {...otherProps} alt="error icon" />
  );
};

export default ErrorIcon;

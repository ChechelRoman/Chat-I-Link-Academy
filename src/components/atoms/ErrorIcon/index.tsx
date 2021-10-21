import React from 'react';
import errorIcon from '../../../images/icon-error.png';
import './style.scss';

type ErrorIconProps = React.ImgHTMLAttributes<HTMLImageElement>;

const ErrorIcon = (props: ErrorIconProps) => {
  const { ...otherProps } = props;

  return (
    <img
      className="error_icon"
      src={errorIcon}
      {...otherProps}
      alt="error icon"
    />
  );
};

export default ErrorIcon;

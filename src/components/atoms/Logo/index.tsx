import React from 'react';
import logo from '../../../images/logo.png';
import './style.scss';

type LogoProps = React.ImgHTMLAttributes<HTMLImageElement>;

const Logo = (props: LogoProps) => {
  const { className, ...otherProps } = props;

  return <img className={className} src={logo} alt="logo" {...otherProps} />;
};

export default Logo;

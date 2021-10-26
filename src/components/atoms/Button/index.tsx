import React from 'react';
import './style.scss';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({
  type = 'button',
  children,
}) => {
  return (
    <button className="button" type={type}>
      {children}
    </button>
  );
};

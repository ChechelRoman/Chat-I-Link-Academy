import React from 'react';

import './style.scss';

import cn from 'classnames';

type InputProps = {
  isValid: boolean;
  name?: string;
  placeholder?: string;
};

export const Input: React.FC<InputProps> = ({ isValid, name, placeholder }) => {
  const classes = cn('input', {
    invalid: !isValid,
  });

  return <input className={classes} name={name} placeholder={placeholder} />;
};

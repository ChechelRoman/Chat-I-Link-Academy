import React from 'react';
import './style.scss';
import { useHistory } from 'react-router';
import cn from 'classnames';

interface ButtonProps {
  type: 'button' | 'submit' | 'reset';
  direction?: 'login' | 'registration';
}

export const Button: React.FC<ButtonProps> = ({
  type,
  children,
  direction,
}) => {
  const history = useHistory();

  const handleClick = () => {
    if (direction === 'login') {
      history.push('/login');
    }

    if (direction === 'registration') {
      history.push('./sign_in');
    }
  };

  const classes = cn({
    submit_button: type === 'submit',
    button: type === 'button',
  });

  return (
    <button className={classes} type={type} onClick={handleClick}>
      {children}
    </button>
  );
};

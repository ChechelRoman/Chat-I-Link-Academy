import React from 'react';
import { useHistory } from 'react-router';
import './style.scss';

interface ButtonProps {
  type: 'button' | 'submit' | 'reset' | undefined;
  isFormValid: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  type,
  children,
  isFormValid,
}) => {
  const history = useHistory();

  const handleClick = () => {
    if (isFormValid) {
      history.push('/chat');
    }
  };

  return (
    <button className="button" type={type} onClick={handleClick}>
      {children}
    </button>
  );
};

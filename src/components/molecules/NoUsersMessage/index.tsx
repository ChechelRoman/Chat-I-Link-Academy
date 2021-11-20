import React from 'react';
import './style.scss';
import aloneUser from '../../../images/alone-user.svg';
import { Header4 } from '../../atoms/Typography';

interface NoUsersMessageProps {
  description: string;
}

export const NoUsersMessage: React.FC<NoUsersMessageProps> = ({
  description,
}) => {
  return (
    <div className="no-user-message">
      <img className="alone-user" alt="alone user icon" src={aloneUser} />
      <Header4>{description}</Header4>
    </div>
  );
};

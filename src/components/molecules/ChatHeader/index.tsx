import React from 'react';
import './style.scss';
import { Logo } from '../../atoms/Logo';
import ProfileIcon from '../../../images/profile-icon.png';

export const ChatHeader: React.FC = () => {
  return (
    <>
      <Logo type="chat-logo" />
      <img className="profile-icon" src={ProfileIcon} alt="profile icon" />
    </>
  );
};

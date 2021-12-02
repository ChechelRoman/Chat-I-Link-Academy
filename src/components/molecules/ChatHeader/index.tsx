import React from 'react';
import './style.scss';
import { Logo } from '../../atoms/Logo';
import ProfileIcon from '../../../images/profile-icon.svg';

export const ChatHeader: React.FC = () => {
  return (
    <>
      <Logo type="chat_logo" />
      <img className="profile_icon" src={ProfileIcon} alt="profile icon" />
    </>
  );
};

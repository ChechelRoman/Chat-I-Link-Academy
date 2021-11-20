import React from 'react';
import maleIcon from './../../../images/male-user-icon.svg';
import femaleIcon from './../../../images/female-user-icon.svg';
import './style.scss';

interface UserAvatarProps {
  gender: string;
}

export const UserAvatar: React.FC<UserAvatarProps> = ({ gender }) => {
  switch (gender) {
    case 'male':
      return <img src={maleIcon} className="user-avatar" alt="male" />;
    case 'female':
      return <img src={femaleIcon} className="user-avatar" alt="female" />;
    default:
      return null;
  }
};

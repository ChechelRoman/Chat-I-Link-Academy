import React from 'react';
import maleIcon from './../../../images/male-user-icon.png';
import femaleIcon from './../../../images/female-user-icon.png';
import cn from 'classnames';
import './style.scss';

type UserAvatarProps = {
  className: 'male' | 'female';
};

const UserAvatar: React.FC<UserAvatarProps> = ({ className }) => {
  const classes = cn(className, 'user-avatar');

  switch (className) {
    case 'male':
      return <img src={maleIcon} className={classes} alt="male" />;
    case 'female':
      return <img src={femaleIcon} className={classes} alt="female" />;
    default:
      return null;
  }
};

export default UserAvatar;

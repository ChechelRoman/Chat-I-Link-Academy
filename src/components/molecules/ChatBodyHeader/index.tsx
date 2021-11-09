import React from 'react';
import './style.scss';
import { Header3, Text1 } from '../../atoms/Typography';
import { UserAvatar } from '../../atoms/UserAvatar';
import backArrow from '../../../images/back-arrow-icon.png';
interface ContactHeaderProps {
  // lastSeen: string;
  contactName: string;
  onClick: (currentChatId: string) => void;
  gender: string;
}

export const ChatBodyHeader: React.FC<ContactHeaderProps> = ({
  // lastSeen,
  contactName,
  onClick,
  gender,
}) => {
  const handleClick = () => {
    onClick('empty');
  };

  return (
    <div className="contact-header">
      <img
        className="back-arrow"
        src={backArrow}
        alt="back arrow icon"
        onClick={handleClick}
      />
      <UserAvatar gender={gender} />
      <Header3>{contactName}</Header3>
      {/* <Text1>Last seen {lastSeen} minutes ago</Text1> */}
    </div>
  );
};

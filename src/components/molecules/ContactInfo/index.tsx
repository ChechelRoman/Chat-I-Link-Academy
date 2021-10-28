import React from 'react';
import './style.scss';
import { UserAvatar } from '../../atoms/UserAvatar';
import { Header4, Text2 } from '../../atoms/Typography';
import cn from 'classnames';

type ContactInfoProps = {
  isActive: boolean;
  id: string;
  gender: string;
  contactName: string;
  lastMessage: string;
  source: string;
  onClick: (currentChatId: string) => void;
};

const shortenMessage = (message: string) => {
  let result = '';
  if (message.length > 25) {
    result += `${message.slice(0, 23)}...`;
  } else {
    return message;
  }

  return result;
};

export const ContactInfo: React.FC<ContactInfoProps> = ({
  id,
  gender,
  contactName,
  lastMessage,
  isActive,
  source,
  onClick,
}) => {
  const classes = cn('contact-item', {
    active: isActive,
  });

  const handleItemClick = () => {
    onClick(id);
  };

  return (
    <div className={classes} onClick={handleItemClick}>
      <UserAvatar gender={gender} />
      <div className="info">
        <Header4>{contactName}</Header4>
        {source === 'outcoming' ? (
          <Text2>
            <span>You: </span>
            {shortenMessage(lastMessage)}
          </Text2>
        ) : (
          <Text2>{shortenMessage(lastMessage)}</Text2>
        )}
      </div>
    </div>
  );
};

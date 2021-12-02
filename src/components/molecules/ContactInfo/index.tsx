import React from 'react';
import './style.scss';
import { UserAvatar } from '../../atoms/UserAvatar';
import { Header4, Text2 } from '../../atoms/Typography';
import cn from 'classnames';
import { shortenMessage } from '../../../utils/shortenMessage';

export interface ContactInfoProps {
  title?: string;
  isActive: boolean;
  id?: string;
  gender: string;
  contactName: string;
  lastMessage?: string;
  source?: string;
  onClick: (currentChatId: string) => void;
}

export const ContactInfo: React.FC<ContactInfoProps> = ({
  title,
  id,
  gender,
  contactName,
  lastMessage,
  isActive,
  source,
  onClick,
}) => {
  const classes = cn('contact_item', {
    active: isActive,
  });

  const handleItemClick = () => {
    if (id) {
      onClick(id);
    }
  };

  return (
    <div className={classes} onClick={handleItemClick}>
      <UserAvatar gender={gender} />
      <div className="info">
        <Header4>{contactName}</Header4>
        {source === 'outcoming' ? (
          <Text2>
            <span>You: </span>
            {!lastMessage ? shortenMessage(title) : shortenMessage(lastMessage)}
          </Text2>
        ) : (
          <Text2>
            {!lastMessage ? shortenMessage(title) : shortenMessage(lastMessage)}
          </Text2>
        )}
      </div>
    </div>
  );
};

import React from 'react';
import './style.scss';
import { ContactInfo } from '../../molecules/ContactInfo';

import chats from '../../../store/chatsStore';
import { observer } from 'mobx-react-lite';

interface ContactsProps {
  onClick: (currentChatId: string) => void;
  currentChatId: string;
}

export const Contacts: React.FC<ContactsProps> = observer(
  ({ onClick, currentChatId }) => {
    const contactItems = chats.chats.map((chat) => {
      return (
        <li key={chat.id}>
          <ContactInfo
            title={chat.messages[chat.messages.length - 1]?.title}
            isActive={chat.id === currentChatId}
            contactName={chat.name}
            gender={chat.gender}
            id={chat.id}
            lastMessage={chat.messages[chat.messages.length - 1]?.text}
            source={chat.messages[chat.messages.length - 1]?.source}
            onClick={onClick}
          />
        </li>
      );
    });
    return <ul>{contactItems}</ul>;
  }
);

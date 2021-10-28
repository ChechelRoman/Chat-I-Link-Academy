import React from 'react';
import './style.scss';
import { ContactInfo } from '../../molecules/ContactInfo';
import { Response } from '../../pages/ChatPage/mocks';

type ContactsProps = {
  chats: Response[];
  onClick: (currentChatId: string) => void;
  currentChatId: string;
};

export const Contacts: React.FC<ContactsProps> = ({
  chats,
  onClick,
  currentChatId,
}) => {
  const contactItems = chats.map((chat) => {
    return (
      <li key={chat.id}>
        <ContactInfo
          isActive={chat.id === currentChatId}
          contactName={chat.name}
          gender={chat.gender}
          id={chat.id}
          lastMessage={chat.messages[chat.messages.length - 1].text}
          source={chat.messages[chat.messages.length - 1].source}
          onClick={onClick}
        />
      </li>
    );
  });
  return <ul>{contactItems}</ul>;
};

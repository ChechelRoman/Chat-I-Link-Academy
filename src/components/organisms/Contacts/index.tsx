import React from 'react';
import './style.scss';
import { ContactInfo } from '../../molecules/ContactInfo';
// import { Response } from '../../pages/ChatPage/mocks';
import { UserList } from '../../pages/ChatPage';

interface ContactsProps {
  chats: UserList[];
  onClick: (currentChatId: string) => void;
  currentChatId: string;
}

export const Contacts: React.FC<ContactsProps> = ({
  chats,
  onClick,
  currentChatId,
}) => {
  const contactItems = chats.map((chat, index) => {
    return (
      <li key={index}>
        <ContactInfo
          isActive={String(index) === currentChatId}
          contactName={chat.name}
          gender={chat.gender}
          id={String(index)}
          // lastMessage={chat.messages[chat.messages.length - 1].text}
          // source={chat.messages[chat.messages.length - 1].source}
          onClick={onClick}
        />
      </li>
    );
  });
  return <ul>{contactItems}</ul>;
};

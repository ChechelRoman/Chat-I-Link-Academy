import React from 'react';
import { useState } from 'react';
import { ChatTemplate } from '../../templates/ChatTemplate';
import { ChatBody } from '../../organisms/ChatBody';
import { ChatHeader } from '../../molecules/ChatHeader';
import { Contacts } from '../../organisms/Contacts';
import { emptyResponse, filledResponse } from './mocks';
import { NoUsersMessage } from '../../molecules/NoUsersMessage';
import { LoadingIcon } from '../../atoms/LoadingIcon';

export const ChatPage: React.FC = () => {
  // const response = emptyResponse;
  const response = filledResponse;
  const [currentChatId, setcurrentChatId] = useState<string>('empty');

  if (response.length === 0) {
    return (
      <ChatTemplate
        header={<ChatHeader />}
        contactsBar={
          <NoUsersMessage description="There is no other users yet" />
        }
        /*
          Не придумал пока как вставить эту анимацию при получении response,
          оставлю пока здесь :)
        */
        chatBody={<LoadingIcon />}
      />
    );
  }

  return (
    <ChatTemplate
      contactsBar={
        <Contacts
          chats={response}
          onClick={setcurrentChatId}
          currentChatId={currentChatId}
        />
      }
      header={<ChatHeader />}
      chatBody={<ChatBody chats={response} currentChatId={currentChatId} />}
    />
  );
};

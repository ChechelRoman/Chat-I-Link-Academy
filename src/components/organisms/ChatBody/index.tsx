import React from 'react';
import './style.scss';
import { useState } from 'react';
import { ChatBodyHeader } from '../../molecules/ChatBodyHeader';
import { Message } from '../../molecules/Message';
import { ChatBodySendMenu } from '../../molecules/ChatBodySendMenu';
import { Header4 } from '../../atoms/Typography';
import { Response } from '../../pages/ChatPage/mocks';
import uniqueId from 'lodash/uniqueId';

type ChatBodyProps = {
  chats: Response[];
  currentChatId: string;
};

export const ChatBody: React.FC<ChatBodyProps> = ({ chats, currentChatId }) => {
  /*
    В данном компоненте я использую этот хук для проверки верстки отправленных мною сообщений.
  */
  const [sentMessages, setSentMessages] = useState<
    {
      text?: string;
      type: string;
      source?: string;
      title?: string;
      size?: number;
    }[]
  >([]);

  if (currentChatId === 'empty') {
    return (
      <div className="user-tip">
        <Header4>Select a chat to start messaging</Header4>
      </div>
    );
  }

  const activeChat = chats.filter((chat) => chat.id === currentChatId)[0];
  const messageList = activeChat.messages.map((message) => {
    return (
      <li key={uniqueId()}>
        <Message
          type={message.type}
          text={message.text}
          source={message.source}
          size={message.size}
          title={message.title}
        />
      </li>
    );
  });

  /*
    Эту константу я также сделал для проверки отправленных мной сообщений и вставил ее в рендерящийся список.
    Я понимаю, что так делать нехорошо, тут лучше уже использовать стейт менеджер, но еще руки не дошли.
  */
  const sentMessagesList = sentMessages.map((message) => {
    return (
      <li key={uniqueId()}>
        <Message
          type={message.type}
          text={message.text}
          source={message.source}
          title={message.title}
          size={message.size}
        />
      </li>
    );
  });

  return (
    <div className="chat-body">
      <div className="chat-body__header">
        <ChatBodyHeader
          contactName={activeChat.name}
          lastSeen={activeChat.lastSeen}
        />
      </div>
      <div className="chat-body__messages">
        <ul>
          {messageList}
          {sentMessagesList}
        </ul>
      </div>
      <div className="chat-body__send-menu">
        <ChatBodySendMenu
          onClick={setSentMessages}
          sentMessages={sentMessages}
        />
      </div>
    </div>
  );
};

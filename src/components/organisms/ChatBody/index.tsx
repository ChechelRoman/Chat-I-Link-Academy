import React from 'react';
import './style.scss';
import {
  ChatBodyHeader,
  ContactHeaderProps,
} from '../../molecules/ChatBodyHeader';
import { Message } from '../../molecules/Message';
import { ChatBodySendMenu } from '../../molecules/ChatBodySendMenu';
import { Header4 } from '../../atoms/Typography';
import chats from '../../../store/chats';
import { observer } from 'mobx-react-lite';

interface ChatBodyProps {
  socket: WebSocket;
  currentChatId: string;
  onClick: ContactHeaderProps['onClick'];
}

export const ChatBody: React.FC<ChatBodyProps> = observer(
  ({ socket, currentChatId, onClick }) => {
    if (currentChatId === undefined) {
      return (
        <div className="user-tip">
          <Header4>Select a chat to start messaging</Header4>
        </div>
      );
    }

    const activeChat = chats.chats.filter(
      (chat) => chat.id === currentChatId
    )[0];

    const messageList = activeChat.messages.map((message) => {
      return (
        <li key={message.id}>
          <Message
            link={message.link}
            attached={message.attached}
            id={message.id}
            source={message.source}
            text={message.text}
            size={message.size}
            title={message.title}
          />
        </li>
      );
    });

    return (
      <div className="chat-body">
        <div className="chat-body__header">
          <ChatBodyHeader
            contactName={activeChat.name}
            onClick={onClick}
            gender={activeChat.gender}
            lastSeen={activeChat.lastSeen}
          />
        </div>
        <div className="chat-body__messages">
          <ul>{messageList}</ul>
        </div>
        <div className="chat-body__send-menu">
          <ChatBodySendMenu socket={socket} chatId={activeChat.id} />
        </div>
      </div>
    );
  }
);

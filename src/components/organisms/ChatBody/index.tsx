import React from 'react';
import './style.scss';
// import { useState } from 'react';
import {
  ChatBodyHeader,
  ContactHeaderProps,
} from '../../molecules/ChatBodyHeader';
// import { Message } from '../../molecules/Message';
import { ChatBodySendMenu } from '../../molecules/ChatBodySendMenu';
import { Header4 } from '../../atoms/Typography';
// import { Response } from '../../pages/ChatPage/mocks';
import { UserList } from '../../pages/ChatPage';
interface ChatBodyProps {
  chats: UserList[];
  currentChatId: string;
  onClick: ContactHeaderProps['onClick'];
}

// export interface SentMessages {
//   text?: string;
//   type: string;
//   source?: string;
//   title?: string;
//   size?: number;
// }

export const ChatBody: React.FC<ChatBodyProps> = ({
  chats,
  currentChatId,
  onClick,
}) => {
  /*
    В данном компоненте я использую этот хук для проверки верстки отправленных мною сообщений.
  */
  // const [sentMessages, setSentMessages] = useState<SentMessages[]>([]);

  if (currentChatId === undefined) {
    return (
      <div className="user-tip">
        <Header4>Select a chat to start messaging</Header4>
      </div>
    );
  }

  const activeChat = chats.filter(
    (chat, index) => String(index) === currentChatId
  )[0];
  // const messageList = activeChat.messages.map((message, index) => {
  //   return (
  //     <li key={index}>
  //       <Message
  //         type={message.type}
  //         text={message.text}
  //         source={message.source}
  //         size={message.size}
  //         title={message.title}
  //       />
  //     </li>
  //   );
  // });

  /*
    Эту константу я также сделал для проверки отправленных мной сообщений и вставил ее в рендерящийся список.
    Я понимаю, что так делать нехорошо, тут лучше уже использовать стейт менеджер, но еще руки не дошли.
  */
  // const sentMessagesList = sentMessages.map((message, index) => {
  //   return (
  //     <li key={index}>
  //       <Message
  //         type={message.type}
  //         text={message.text}
  //         source={message.source}
  //         title={message.title}
  //         size={message.size}
  //       />
  //     </li>
  //   );
  // });

  return (
    <div className="chat-body">
      <div className="chat-body__header">
        <ChatBodyHeader
          contactName={activeChat.name}
          onClick={onClick}
          gender={activeChat.gender}
          // lastSeen={activeChat.lastSeen}
        />
      </div>
      <div className="chat-body__messages">
        {/* <ul>
          {messageList}
          {sentMessagesList}
        </ul> */}
      </div>
      <div className="chat-body__send-menu">
        <ChatBodySendMenu
        // onClick={setSentMessages}
        // sentMessages={sentMessages}
        />
      </div>
    </div>
  );
};

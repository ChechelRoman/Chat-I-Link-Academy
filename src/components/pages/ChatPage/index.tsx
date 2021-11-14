import React from 'react';
import { useState } from 'react';
import { ChatTemplate } from '../../templates/ChatTemplate';
import { ChatBody } from '../../organisms/ChatBody';
import { ChatHeader } from '../../molecules/ChatHeader';
import { Contacts } from '../../organisms/Contacts';
import { NoUsersMessage } from '../../molecules/NoUsersMessage';
import { LoadingIcon } from '../../atoms/LoadingIcon';
import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
// import { emptyResponse } from './mocks';

const websocket = new WebSocket(
  `ws://109.194.37.212:2346/?type=test&ws_id=${localStorage.getItem(
    'connect_key'
  )}`
);

export interface UserList {
  name: string;
  gender: string;
}

export const ChatPage: React.FC = () => {
  const [list, setList] = useState<UserList[]>([]);
  const [isOpened, setIsOpened] = useState<boolean>(false);
  // const [currentChatId, setcurrentChatId] = useState<string>('empty');
  const history = useHistory();
  const { id } = useParams<{ id: string }>();

  const handleClickChat = (id: string) => {
    history.push(`/chat/${id}`);
  };

  const handleClickBackward = () => {
    history.push('/chat');
  };

  useEffect(() => {
    websocket.onopen = () => setIsOpened(true);
    websocket.onclose = () => setIsOpened(false);
    websocket.onerror = (error) => console.log(error);
  }, []);

  useEffect(() => {
    if (websocket.readyState === 1) {
      setIsOpened(true);
      websocket.send(JSON.stringify({ type: 'users_list' }));
      websocket.onmessage = (msg) => {
        const list = JSON.parse(msg.data);
        setList(list.data);
      };
    }
  }, [isOpened]);

  // const response = emptyResponse;

  if (!isOpened) {
    return (
      <ChatTemplate
        header={<ChatHeader />}
        chatBody={<LoadingIcon />}
        isActive={id}
      />
    );
  }

  if (isOpened && list.length === 0) {
    return (
      <ChatTemplate
        header={<ChatHeader />}
        contactsBar={
          <NoUsersMessage description="There is no other users yet" />
        }
        isActive={id}
      />
    );
  }

  // if (response.length === 0) {
  //   return (
  //     <ChatTemplate
  //       header={<ChatHeader />}
  //       contactsBar={
  //         <NoUsersMessage description="There is no other users yet" />
  //       }
  //       isActive={currentChatId}
  //     />
  //   );
  // }

  return (
    <ChatTemplate
      contactsBar={
        <Contacts
          chats={list}
          // onClick={setcurrentChatId}
          onClick={handleClickChat}
          currentChatId={id}
        />
      }
      header={<ChatHeader />}
      chatBody={
        <ChatBody
          chats={list}
          currentChatId={id}
          onClick={handleClickBackward}
        />
      }
      isActive={id}
    />
  );
};

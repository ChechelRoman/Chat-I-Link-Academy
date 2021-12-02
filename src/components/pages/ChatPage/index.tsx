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
import chatsStore from '../../../store/chatsStore';
import { observer } from 'mobx-react-lite';

const websocket = new WebSocket(
  `ws://109.194.37.212:2346/?type=test&ws_id=${localStorage.getItem('user')}`
);

export function onMessageHandler(message: MessageEvent<any>) {
  const list = JSON.parse(message.data);
  chatsStore.addChats(list.data);
}

export const ChatPage: React.FC = observer(() => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const history = useHistory();
  const { id } = useParams<{ id: string }>();

  const handleClickChat = (id: string) => {
    history.push(`/chat/${id}`);
  };

  const handleClickBackward = () => {
    history.push('/chat');
  };

  const addUsersListFromServer = () => {
    websocket.send(JSON.stringify({ type: 'users_list' }));
    websocket.addEventListener('message', onMessageHandler);
  };

  useEffect(() => {
    document.title = 'Chat';
    websocket.onopen = () => setIsOpened(true);
    websocket.onclose = () => setIsOpened(false);
    websocket.onerror = (error) => console.log(error);
  }, []);

  useEffect(() => {
    if (websocket.readyState === 1) {
      setIsOpened(true);
      addUsersListFromServer();
    }
  }, [isOpened]);

  if (!isOpened) {
    return (
      <ChatTemplate
        header={<ChatHeader />}
        chatBody={<LoadingIcon />}
        contactsBar={<LoadingIcon />}
        isActive={id}
      />
    );
  }

  if (isOpened && chatsStore.chats.length === 0) {
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

  return (
    <ChatTemplate
      contactsBar={<Contacts onClick={handleClickChat} currentChatId={id} />}
      header={<ChatHeader />}
      chatBody={
        <ChatBody
          socket={websocket}
          currentChatId={id}
          onClick={handleClickBackward}
        />
      }
      isActive={id}
    />
  );
});

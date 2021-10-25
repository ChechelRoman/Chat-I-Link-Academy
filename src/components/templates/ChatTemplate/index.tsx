import React from 'react';
import './style.scss';

type ChatTemplateProps = {
  header: React.ReactNode | React.ReactNode[];
  leftSideBar: React.ReactNode | React.ReactNode[];
  userInfo: React.ReactNode | React.ReactNode[];
  messages: React.ReactNode | React.ReactNode[];
  sendMenu: React.ReactNode | React.ReactNode[];
};

const ChatTemplate: React.FC<ChatTemplateProps> = ({
  header,
  leftSideBar,
  userInfo,
  messages,
  sendMenu,
}) => {
  return (
    <div className="chat-template">
      <div className="header">{header}</div>
      <div className="content-wrapper">
        <div className="left-side-bar">{leftSideBar}</div>
        <div className="main-wrapper">
          <div className="user-info">{userInfo}</div>
          <div className="messages">{messages}</div>
          <div className="send-menu">{sendMenu}</div>
        </div>
      </div>
    </div>
  );
};

export default ChatTemplate;

import React from 'react';
import './style.scss';

type ChatTemplateProps = {
  header?: React.ReactNode | React.ReactNode[];
  contactsBar?: React.ReactNode | React.ReactNode[];
  chatBody?: React.ReactNode | React.ReactNode[];
};

export const ChatTemplate: React.FC<ChatTemplateProps> = ({
  header,
  contactsBar,
  chatBody,
}) => {
  return (
    <div className="chat-template">
      <div className="header">{header}</div>
      <div className="content-wrapper">
        <div className="contacts-bar">{contactsBar}</div>
        <div className="main">{chatBody}</div>
      </div>
    </div>
  );
};

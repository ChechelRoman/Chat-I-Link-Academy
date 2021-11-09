import React from 'react';
import cn from 'classnames';
import './style.scss';

type ChatTemplateProps = {
  header?: React.ReactNode | React.ReactNode[];
  contactsBar?: React.ReactNode | React.ReactNode[];
  chatBody?: React.ReactNode | React.ReactNode[];
  isActive: string;
};

export const ChatTemplate: React.FC<ChatTemplateProps> = ({
  header,
  contactsBar,
  chatBody,
  isActive,
}) => {
  const headerClassnames = cn('header-wrapper', {
    chosen: isActive !== 'empty',
  });

  const contactsClassnames = cn('contacts-wrapper', {
    chosen: isActive !== 'empty',
  });

  const mainClassnames = cn('main-wrapper', {
    chosen: isActive !== 'empty',
  });

  return (
    <div className="chat-template">
      <div className={headerClassnames}>
        <div className="header">{header}</div>
      </div>
      <div className="content-wrapper">
        <div className={contactsClassnames}>
          <div className="contacts-bar">{contactsBar}</div>
        </div>
        <div className={mainClassnames}>
          <div className="main">{chatBody}</div>
        </div>
      </div>
    </div>
  );
};

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
  const headerClassnames = cn('header_wrapper', {
    chosen: isActive,
  });

  const contactsClassnames = cn('contacts_wrapper', {
    chosen: isActive,
  });

  const mainClassnames = cn('main_wrapper', {
    chosen: isActive,
  });

  return (
    <div className="chat_template">
      <div className={headerClassnames}>
        <div className="header">{header}</div>
      </div>
      <div className="content_wrapper">
        <div className={contactsClassnames}>
          <div className="contacts_bar">{contactsBar}</div>
        </div>
        <div className={mainClassnames}>
          <div className="main">{chatBody}</div>
        </div>
      </div>
    </div>
  );
};

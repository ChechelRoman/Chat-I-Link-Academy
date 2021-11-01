import React from 'react';
import './style.scss';
import { Header3, Text1 } from '../../atoms/Typography';

interface ContactHeaderProps {
  lastSeen: string;
  contactName: string;
}

export const ChatBodyHeader: React.FC<ContactHeaderProps> = ({
  lastSeen,
  contactName,
}) => {
  return (
    <div className="contact-header">
      <Header3>{contactName}</Header3>
      <Text1>Last seen {lastSeen} minutes ago</Text1>
    </div>
  );
};

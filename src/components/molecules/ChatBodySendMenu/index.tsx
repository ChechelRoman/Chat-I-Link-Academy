import React from 'react';
import './style.scss';
import { useState } from 'react';
import sendIcon from '../../../images/send-icon.png';
import attachIcon from '../../../images/attach-icon.png';
// import { SentMessages } from '../../organisms/ChatBody';

// interface ChatBodySendMenuProps {
//   sentMessages: {
//     text?: string;
//     type: string;
//     source?: string;
//     title?: string;
//     size?: number;
//   }[];
//   onClick: (sentMessages: SentMessages[]) => void;
// }

// export const ChatBodySendMenu: React.FC<ChatBodySendMenuProps> = ({
//   sentMessages,
//   onClick,
// }) => {

export const ChatBodySendMenu: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  // const handleClick = () => {
  //   onClick([
  //     ...sentMessages,
  //     { text: inputValue, type: 'text', source: 'outcoming' },
  //   ]);
  //   setInputValue('');
  // };

  // const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   if (event.target.files !== null) {
  //     const file = event.target.files[0];
  //     onClick([
  //       ...sentMessages,
  //       {
  //         size: file.size,
  //         type: 'file',
  //         source: 'outcoming',
  //         title: file.name,
  //       },
  //     ]);
  //   }
  // };

  return (
    <div className="send-menu">
      <label className="send-menu__label">
        <img
          className="send-menu__attach-icon"
          src={attachIcon}
          alt="attach icon"
        />
        <input
          className="send-menu__file-input"
          type="file"
          // onChange={handleUpload}
        />
      </label>
      <input
        value={inputValue}
        onChange={handleInput}
        className="send-menu__text-input"
        type="text"
        placeholder="Write something..."
      />
      <img
        className="send-menu__send-icon"
        src={sendIcon}
        alt="send icon"
        // onClick={handleClick}
      />
    </div>
  );
};

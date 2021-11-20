import React from 'react';
import './style.scss';
import { useState } from 'react';
import sendIcon from '../../../images/send-icon.svg';
import attachIcon from '../../../images/attach-icon.svg';
import { Messages } from '../../../store/chats';
import chats from '../../../store/chats';
import { observer } from 'mobx-react-lite';
import { uniqueId } from 'lodash';
import axios from 'axios';

interface ChatBodySendMenuProps {
  socket: WebSocket;
  chatId?: string;
}

export const ChatBodySendMenu: React.FC<ChatBodySendMenuProps> = observer(
  ({ chatId, socket }) => {
    const [inputValue, setInputValue] = useState<string>('');
    const [uploadStatus, setUploadStatus] = useState<string>('no-upload');
    const [file, setFile] = useState<File | undefined>(undefined);
    const [link, setLink] = useState<string>('');

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const isAttached = file === undefined ? false : true;

      if (uploadStatus === 'uploading') {
        alert('File is uploading!');
      }

      if (isAttached) {
        const message: Messages = {
          attached: isAttached,
          id: uniqueId(),
          source: 'outcoming',
          text: inputValue,
          size: file?.size,
          title: file?.name,
          link: `http://109.194.37.212:93${link}`,
        };
        if (message.size === undefined) {
          return;
        }
        socket.send(
          `'${JSON.stringify({
            type: 'message',
            data: {
              message: inputValue,
              filelink: `http://109.194.37.212:93${link}`,
              targetId: chatId,
            },
          })}'`
        );
        chats.addMessage(chatId, message);
        setFile(undefined);
        setInputValue('');
        setUploadStatus('no-upload');
      } else {
        const message: Messages = {
          attached: isAttached,
          id: uniqueId(),
          source: 'outcoming',
          text: inputValue,
        };
        if (message.text === '') {
          return;
        }
        socket.send(
          `'${JSON.stringify({
            type: 'message',
            data: { message: inputValue, targetId: chatId },
          })}'`
        );
        chats.addMessage(chatId, message);
        setInputValue('');
      }
    };

    const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.files !== null) {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append('0', file);
        try {
          setUploadStatus('uploading');
          const response = await axios.post<string>(
            'http://109.194.37.212:93/api/upload',
            formData
          );
          if (response.status !== 400) {
            const data = response.data;
            setFile(file);
            setLink(data);
            setUploadStatus('uploaded');
          }
        } catch (error) {
          if (axios.isAxiosError(error)) {
            setUploadStatus('no-upload');
            alert(error.response?.data);
          }
        }
      }
    };

    return (
      <form onSubmit={handleSubmit}>
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
              onChange={handleUpload}
            />
          </label>
          <input
            ref={(inputElement) => {
              if (inputElement) {
                inputElement.focus();
              }
            }}
            value={inputValue}
            onChange={handleInput}
            className="send-menu__text-input"
            type="text"
            placeholder="Write something..."
          />
          <button type="submit" className="send-menu__submit-button"></button>
          <img
            className="send-menu__send-icon"
            src={sendIcon}
            alt="send icon"
          />
        </div>
      </form>
    );
  }
);

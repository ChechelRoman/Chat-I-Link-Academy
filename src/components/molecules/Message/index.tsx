import React from 'react';
import './style.scss';
import { Text1, Text2 } from '../../atoms/Typography';
import cn from 'classnames';
import attachedIcon1 from '../../../images/attached-file-icon-1.svg';
import attachedIcon2 from '../../../images/attached-file-icon-2.svg';
import { Messages } from '../../../store/chats';
import { formatFileSize } from '../../../utils/formatFileSize';

export const Message: React.FC<Messages> = ({
  attached,
  text,
  source,
  title,
  size,
  link,
}) => {
  const classes = cn(source, 'message');

  if (text === '' && size === undefined) {
    return null;
  }

  return (
    <div className={classes}>
      {attached ? (
        <div className="file-container">
          <div className="icon-container">
            <img
              className="attach-icon-1"
              src={attachedIcon1}
              alt="attached file icon"
            />
            <img
              className="attach-icon-2"
              src={attachedIcon2}
              alt="attached file icon"
            />
          </div>
          <div className="file-info-container">
            <a href={link} target="_blank" rel="noopener noreferrer">
              <Text1>{title}</Text1>
            </a>
            <Text2>{formatFileSize(size)}</Text2>
          </div>
        </div>
      ) : null}
      {text ? <Text1>{text}</Text1> : null}
    </div>
  );
};

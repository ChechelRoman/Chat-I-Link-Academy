import React from 'react';
import './style.scss';
import { Text1, Text2 } from '../../atoms/Typography';
import cn from 'classnames';
import attachedIcon1 from '../../../images/attached-file-icon-1.png';
import attachedIcon2 from '../../../images/attached-file-icon-2.png';

type MessageProps = {
  type: string;
  text?: string;
  source?: string;
  title?: string;
  size?: number;
};

const formatSize = (size: any) => {
  let result;

  if (size > 1048576) {
    result = `${(size / 1048576).toFixed(1)} MB`;
  } else {
    result = `${(size / 1024).toFixed(1)} KB`;
  }

  return result;
};

export const Message: React.FC<MessageProps> = ({
  text,
  source,
  type,
  title,
  size,
}) => {
  const classes = cn(source, {
    'text-message': type === 'text',
    'file-message': type === 'file',
  });

  if (type === 'text') {
    return (
      <div className={classes}>
        <Text1>{text}</Text1>
      </div>
    );
  }

  if (type === 'file') {
    return (
      <div className={classes}>
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
          <Text1>{title}</Text1>
          <Text2>{formatSize(size)}</Text2>
        </div>
      </div>
    );
  }

  return null;
};

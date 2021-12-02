import { ContactInfoProps } from '../components/molecules/ContactInfo';

export const shortenMessage = (message: ContactInfoProps['lastMessage']) => {
  let result = '';
  if (message !== undefined) {
    if (message.length > 21) {
      result += `${message.slice(0, 19)}...`;
    } else {
      return message;
    }

    return result;
  }

  return;
};

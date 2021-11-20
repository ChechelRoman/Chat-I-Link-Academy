import { ContactInfoProps } from '../components/molecules/ContactInfo';

export const shortenMessage = (message: ContactInfoProps['lastMessage']) => {
  let result = '';
  if (message !== undefined) {
    if (message.length > 25) {
      result += `${message.slice(0, 23)}...`;
    } else {
      return message;
    }

    return result;
  }

  return;
};

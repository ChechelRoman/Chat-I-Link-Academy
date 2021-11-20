import { makeAutoObservable } from 'mobx';
import { uniqueId, sample } from 'lodash';

export interface UserInfo {
  id?: string;
  name: string;
  gender: string;
  lastSeen?: string;
  messages: Messages[];
}

export interface Messages {
  id: string;
  attached: boolean;
  source: string;
  text?: string;
  title?: string;
  size?: number;
  link?: string;
}

const lastSeenColl = ['10', '9', '8', '7', '6', '5', '4', '3', '2'];

class Chats {
  chats: UserInfo[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addChats(userList: UserInfo[]) {
    const response: UserInfo[] = [...userList];
    response.forEach((user) => {
      user.id = uniqueId();
      user.lastSeen = sample(lastSeenColl);
      user.messages = [];
    });
    this.chats = [...response];
  }

  addMessage(id: string | undefined, message: Messages) {
    this.chats.forEach((chat) => {
      if (chat.id === id) {
        chat.messages?.push(message);
      }
    });
  }
}

export default new Chats();

import { createContext } from 'react';

interface User {
  username: string;
}

interface Auth {
  user: User | null;
  logIn: (userData: string) => void;
  isAuth: () => boolean;
}

const initialAuth: Auth = {
  user: { username: '' },
  logIn: () => {},
  isAuth: () => false,
};

export const authContext = createContext(initialAuth);

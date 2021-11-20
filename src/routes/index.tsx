import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { SCREENS } from './endpoints';
import { LoginPage } from '../components/pages/LoginPage';
import { ChatPage } from '../components/pages/ChatPage';
import { SignInPage } from '../components/pages/SignInPage';
import { authContext } from '../contexts';
import { useAuth } from '../hooks';
import { useState } from 'react';
import { isEmpty } from 'lodash';

interface RouteProps {
  children: React.ReactNode | React.ReactNode[];
  path?: SCREENS.SCREEN_EMPTY_CHAT | SCREENS.SCREEN_CHAT;
  exact?: true;
}

const AuthProvider: React.FC<RouteProps> = ({ children }) => {
  const currentUser = localStorage.getItem('user');
  const initialState = currentUser ? { username: currentUser } : null;
  const [user, setUser] = useState(initialState);

  const logIn = (userData: string) => {
    localStorage.setItem('user', userData);
    setUser({ username: userData });
  };

  const isAuth = () => !isEmpty(user);

  const authValue = {
    user,
    logIn,
    isAuth,
  };

  return (
    <authContext.Provider value={authValue}>{children}</authContext.Provider>
  );
};

const PrivateRoute: React.FC<RouteProps> = ({ children, ...props }) => {
  const auth = useAuth();

  const routeRender = () => {
    if (auth.isAuth()) {
      return children;
    }

    return <Redirect to={SCREENS.SCREEN_LOGIN} />;
  };

  return <Route {...props} render={routeRender} />;
};

export const Routes: React.FC = () => {
  return (
    <AuthProvider>
      <Switch>
        <Route path={SCREENS.SCREEN_LOGIN} exact>
          <LoginPage />
        </Route>
        <Route path={SCREENS.SCREEN_SIGN} exact>
          <SignInPage />
        </Route>
        <PrivateRoute path={SCREENS.SCREEN_EMPTY_CHAT} exact>
          <ChatPage />
        </PrivateRoute>
        <PrivateRoute path={SCREENS.SCREEN_CHAT} exact>
          <ChatPage />
        </PrivateRoute>
        <Redirect to={SCREENS.SCREEN_EMPTY_CHAT} />
      </Switch>
    </AuthProvider>
  );
};

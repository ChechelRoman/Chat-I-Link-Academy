import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { SCREENS } from './endpoints';
import { LoginPage } from '../components/pages/LoginPage';
import { ChatPage } from '../components/pages/ChatPage';
import { SignInPage } from '../components/pages/SignInPage';

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path={SCREENS.SCREEN_LOGIN} exact>
        <LoginPage />
      </Route>
      <Route path={SCREENS.SCREEN_SIGN} exact>
        <SignInPage />
      </Route>
      <Route path={SCREENS.SCREEN_CHAT} exact>
        <ChatPage />
      </Route>
      <Redirect to={SCREENS.SCREEN_LOGIN} />
    </Switch>
  );
};

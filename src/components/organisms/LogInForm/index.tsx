import React from 'react';
import { FormField } from '../../molecules/FormField';
import { Logo } from '../../atoms/Logo';
import { Button } from '../../atoms/Button';
import { Header1, Header2 } from '../../atoms/Typography';
import './style.scss';

type LogInFormProps = {
  type: 'login-logo' | 'chat-logo';
};

export const LogInForm: React.FC<LogInFormProps> = ({ type }) => {
  const isValid = true;

  return (
    <>
      <Logo type={type} />
      <Header1>
        Welcome to <span className="header-blue">Chatty</span>
        <span className="header-grey">!</span>
      </Header1>
      <Header2>Please, authorize yourself</Header2>
      <form action="post">
        <FormField
          isValid={isValid}
          label="User name"
          name="user"
          placeholder="Input user name"
          error=""
        />
        <FormField
          isValid={isValid}
          label="Password"
          name="password"
          placeholder="Input password"
          error=""
        />
        <Button type="submit">Log in</Button>
      </form>
    </>
  );
};

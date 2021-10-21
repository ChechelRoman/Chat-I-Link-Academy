import React from 'react';
import FormField from '../../molecules/FormField';
import Logo from '../../atoms/Logo';
import Button from '../../atoms/Button';
import { Header1, Header2 } from '../../atoms/Typography';
import './style.scss';

type LogInFormProps = {
  className: string;
};

const LogInForm = (props: LogInFormProps) => {
  const { className } = props;

  return (
    <>
      <Logo className={className} />
      <Header1>
        Welcome to <span className="header-blue">Chatty</span>
        <span className="header-grey">!</span>
      </Header1>
      <Header2>Please, authorize yourself</Header2>
      <form action="post">
        <FormField
          label="User name"
          name="user"
          placeholder="Input user name"
          error="Something goes wrong"
        />
        <FormField
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

export default LogInForm;

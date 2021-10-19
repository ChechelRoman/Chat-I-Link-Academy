import React from 'react';
import Input from './components/atoms/FormInput';
import { useState } from 'react';

function App() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <React.Fragment>
      <Input
        id="name"
        name="name"
        placeholder="Input user name"
        value={userName}
        handler={handleName}
      />
      <Input
        id="password"
        name="password"
        placeholder="Input password"
        value={password}
        handler={handlePassword}
      />
    </React.Fragment>
  );
}

export default App;

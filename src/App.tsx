import React from 'react';
import Input from './components/atoms/Input';
import Button from './components/atoms/Button';
import { useState } from 'react';

function App() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setValid] = useState(false);

  const handleName: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setUserName(event.target.value);
  };

  const handlePassword: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setPassword(event.target.value);
  };

  return (
    <React.Fragment>
      <Input
        id="name"
        name="name"
        placeholder="Input user name"
        value={userName}
        onChange={handleName}
      />
      <Input
        id="password"
        name="password"
        placeholder="Input password"
        value={password}
        onChange={handlePassword}
      />
      <Button type="submit" disabled={!isValid}>
        Log in
      </Button>
    </React.Fragment>
  );
}

export default App;

// const formField = (props) => {
//   return (
//     <label>
//       <span>{label}</span>
//       <Input />
//       {error ? <span>{error}</span> : null}
//     </label>
//   )
// }

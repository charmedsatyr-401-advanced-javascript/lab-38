import React, { useContext } from 'react';

import ToDo from './components/todo';
import Auth from './components/auth/auth';

import { LoginContext } from './components/auth/login-provider';
import Login from './components/auth/login';

const App = () => {
  const context = useContext(LoginContext);
  return (
    <>
      <Login />
      <Auth loggedIn={context.loggedIn} capabilities={context.capabilities} />
      <ToDo loggedIn={context.loggedIn} capabilities={context.capabilities} />
    </>
  );
};

export default App;

import React from 'react';

import ToDo from './components/todo';
import Auth from './components/auth/auth';

import { LoginContext } from './components/auth/login-provider';
import Login from './components/auth/login';

const App = () => {
  return (
    <LoginContext.Consumer>
      {context => (
        <>
          <Login />
          <Auth loggedIn={context.loggedIn} capabilities={context.capabilities} />
          <ToDo loggedIn={context.loggedIn} capabilities={context.capabilities} />
        </>
      )}
    </LoginContext.Consumer>
  );
};

export default App;

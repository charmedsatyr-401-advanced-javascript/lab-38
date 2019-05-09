import React from 'react';
import If from 'react-ifs';

const Auth = props => (
  <If condition={props.loggedIn}>
    <p>
      You have the current capabilities:{' '}
      {props.capabilities ? props.capabilities.join(', ') : 'none'}
    </p>
  </If>
);

export default Auth;

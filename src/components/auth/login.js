import React, { Component } from 'react';
import superagent from 'superagent';

import { LoginContext } from './login-provider';
import If from '../if';

class Login extends Component {
  static contextType = LoginContext;
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const url = `${process.env.REACT_APP_API}/signin`;
    superagent
      .post(url)
      // .auth('admin', 'ADMIN')
      .auth(this.state.username, this.state.password)
      .then(result => {
        const token = result.text;
        this.context.verify(token);
      })
      .catch(console.error);
  };

  render() {
    const { context } = this;

    console.log(this.state);

    const Logout = () => <button onClick={context.logout}>log out</button>;

    return (
      <If condition={!context.loggedIn} else={<Logout />}>
        <form onSubmit={this.handleSubmit}>
          <input
            name="username"
            onChange={this.handleChange}
            placeholder="username"
            type="username"
          />
          <input
            name="password"
            onChange={this.handleChange}
            placeholder="password"
            type="password"
          />
          <input type="submit" value="login" />
        </form>
      </If>
    );
  }
}

export default Login;

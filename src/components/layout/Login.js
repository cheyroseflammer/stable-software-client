import React, { Component } from 'react';
import { Button, Input } from '../../Utilities/Utilities';
import '../../styles/Login.css';

export default class Login extends Component {
  static defaultProps = {
    onLoginSuccess: () => {},
  };

  state = { error: null };

  handleSubmitBasicAuth = (ev) => {
    ev.preventDefault();
    const { user_name, password } = ev.target;

    console.log('login form submitted');
    console.log({ user_name, password });

    user_name.value = '';
    password.value = '';
    this.props.onLoginSuccess();
  };

  render() {
    const { error } = this.state;
    return (
      <form className="Login" onSubmit={this.handleSubmitBasicAuth}>
        <div role="alert">{error && <p className="red">{error}</p>}</div>
        <div className="user_name">
          <label htmlFor="Login__user_name">User name</label>
          <Input name="user_name" type="texta" id="Login__user_name"></Input>
        </div>
        <div className="password">
          <label htmlFor="Login__password">Password</label>
          <Input name="password" type="password" id="Login__password"></Input>
        </div>
        <Button type="submit">Login</Button>
      </form>
    );
  }
}

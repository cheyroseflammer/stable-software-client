import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthApiService from '../../services/auth-api';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      params: {
        registerUsername: '',
        registerPassword: '',
      },
    };
  }

  handleLoginSuccess = (user) => {
    window.location = '/homepage';
  };

  // signup event handlers
  handleSubmit = (event) => {
    event.preventDefault();
    const { registerUsername, registerPassword } = event.target;
    this.setState({ error: null });
    AuthApiService.postUser({
      email: registerUsername.value,
      password: registerPassword.value,
    })

      .then((response) => {
        registerUsername.value = '';
        registerPassword.value = '';
        window.location = '/home';
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  validateUsername(inputEmail) {
    let outputEmail = inputEmail;
    let mailformat = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\w{2,3})+$/;
    if (!inputEmail.match(mailformat)) {
      outputEmail = '';
    }
    return outputEmail;
  }

  validatePassword(inputPassword) {
    let outputPassword = inputPassword;
    let passwordFormat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{8,}$/;
    if (!inputPassword.match(passwordFormat)) {
      outputPassword = '';
    }
    return outputPassword;
  }

  render() {
    const errorMessage = this.state.error ? (
      <p className="error-message">{this.state.error}</p>
    ) : (
      false
    );
    return (
      <section className="sign-up-component">
        <div className="sign-up-page">
          <h1 className="sign-up-title">Register</h1>
          <div className="form-div-reg">
            <h3 className="header">Sign Up</h3>
            <form className="signup-form" onSubmit={this.handleSubmit}>
              {errorMessage}
              <label htmlFor="username">Email</label>
              <input
                className="sign-up-input"
                type="text"
                name="registerUsername"
                placeholder="email@email.com"
                required
              />

              <label htmlFor="password">Password</label>
              <input
                className="sign-up-input"
                type="password"
                name="registerPassword"
                placeholder="password"
                required
              />

              <button type="submit" className="sign-up-button">
                Register
              </button>
            </form>
            <div className="link-register-div">
              <p>
                {' '}
                Already Have An Account?
                <Link to="/log-in" className="login-link">
                  Log In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default SignUp;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthApiService from '../../services/auth-api';
import '../../styles/Login.css';
import TokenService from '../../services/token-service';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      params: {
        loginUsername: '',
        loginPassword: '',
      },
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { loginUsername, loginPassword } = event.target;

    AuthApiService.postLogin({
      email: loginUsername.value,
      password: loginPassword.value,
    })

      .then((response) => {
        TokenService.saveAuthToken(response.authToken);
        TokenService.saveUserId(response.userId);
        loginUsername.value = '';
        loginPassword.value = '';
        window.location = '/home';
      })
      .catch((err) => {
        console.log(err);
      });
  };

  validateloginUsername(inputEmail) {
    let outputEmail = inputEmail;
    let mailformat = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\w{2,3})+$/;
    if (!inputEmail.match(mailformat)) {
      outputEmail = '';
    }
    return outputEmail;
  }

  validateLoginPassword(inputLoginPassword) {
    let outputLoginPassword = inputLoginPassword;
    let loginPasswordFormat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{8,}$/;

    if (!inputLoginPassword.match(loginPasswordFormat)) {
      outputLoginPassword = '';
    }
    return outputLoginPassword;
  }

  render() {
    const errorMessage = this.state.error ? (
      <p className="error-message">{this.state.error}</p>
    ) : (
      false
    );

    return (
      <section className="login-component">
        <div className="log-in-page">
          <h3 className="subtitle">Log In</h3>
          <div className="form-div">
            <form className="login-form" onSubmit={this.handleSubmit}>
              {errorMessage}

              <label htmlFor="username">Email</label>
              <input
                className="login-input"
                type="text"
                name="loginUsername"
                placeholder="email@email.com"
                required
              />

              <label htmlFor="password">Password</label>
              <input
                className="login-input"
                type="password"
                name="loginPassword"
                placeholder="password"
                required
              />

              <button className="login-button" type="submit">
                {/* <i class="fas fa-sign-in-alt"></i>  */}
                Log In
              </button>
            </form>

            <div className="link-register-div">
              <p> No Account? </p>
              <Link to="sign-up" className="register-link">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

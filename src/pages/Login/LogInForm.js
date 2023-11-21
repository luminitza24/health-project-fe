import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';

import { logIn } from 'redux/auth/operations';
import {
  validateEmail,
  validatePassword,
} from '../../components/common/ValidateEmail';

export const LogInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setEmailError(validateEmail(form.elements.email.value));
    setPasswordError(validatePassword(form.elements.password.value));

    if (!emailError && !passwordError) {
      dispatch(
        logIn({
          email: form.elements.email.value,
          password: form.elements.password.value,
        })
      );
      form.reset();
    }
  };
  return (
    <div className="container m-1">
      <div className="row justify-content-center mt-5 login-form">
        <div className="col-12">
          <h4 className="text-left m-3 pb-4 login-text">Log in</h4>
          <form onSubmit={handleSubmit} className="form-login">
            <div className="form-group m-2">
              <input
                type="email"
                className={`form-control-custom w-2 mb-4 ${
                  emailError ? 'is-invalid' : ''
                }`}
                id="email"
                placeholder="Email *"
                value={email}
                onChange={e => setEmail(e.target.value)}
                onBlur={e => setEmailError(validateEmail(e.target.value))}
              />
              <div className="invalid-feedback">{emailError}</div>
            </div>
            <div className="form-group m-2">
              <input
                type="password"
                className={`form-control-custom w-2 mb-4 ${
                  passwordError ? 'is-invalid' : ''
                }`}
                id="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                onBlur={e => setPasswordError(validatePassword(e.target.value))}
              />
              <div className="invalid-feedback">{passwordError}</div>
            </div>

            <button type="submit" className="btn-modal m-3 pt-3 pb-3">
              Login
            </button>
            <button type="button" className="btn-modal m-3 pt-3 pb-3">
              <RouterLink
                component={RouterLink}
                to="/register"
                className="text-decoration-none text-custom"
              >
                Register
              </RouterLink>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

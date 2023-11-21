import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';

import { register } from 'redux/auth/operations';
import {
  validateName,
  validateEmail,
  validatePassword,
} from '../../components/common/ValidateEmail';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    setNameError(validateName(form.elements.name.value));
    setEmailError(validateEmail(form.elements.email.value));
    setPasswordError(validatePassword(form.elements.password.value));

    if (!nameError && !emailError && !passwordError) {
      dispatch(
        register({
          name: form.elements.name.value,
          email: form.elements.email.value,
          password: form.elements.password.value,
        })
      );
      form.reset();
    }
  };

  return (
    <div className="container m-1">
      <div className="row justify-content-center mt-5">
        <div className="col-12">
          <h4 className="text-left m-3 pb-4 login-text">Register</h4>
          <form onSubmit={handleSubmit}>
            <div className="form-group m-2">
              <input
                type="name"
                className={`form-control-custom w-2 mb-4 ${
                  nameError ? 'is-invalid' : ''
                } `}
                id="name"
                placeholder="Name *"
                value={name}
                onChange={e => setName(e.target.value)}
                onBlur={() => setNameError(validateName(name))}
              />
              <div className="invalid-feedback">{nameError}</div>
            </div>
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
              Register
            </button>
            <button type="button" className="btn-modal m-3 pt-3 pb-3">
              <RouterLink
                component={RouterLink}
                to="/login"
                className="text-decoration-none text-custom"
              >
                Login
              </RouterLink>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

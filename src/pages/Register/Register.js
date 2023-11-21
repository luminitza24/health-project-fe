import React from 'react';
import { Background } from '../../components/Background/Background';
import { RegisterForm } from './RegisterForm';

const Register = () => {
  return (
    <div className="flex-xl-row flex-sm-column d-flex flex-wrap justify-content-center align-items-center home-container">
      <div className="col-md-6 col-sm-12">
        {' '}
        <RegisterForm />{' '}
      </div>
      <div className="col-md-6">
        <Background />
      </div>
    </div>
  );
};

export default Register;

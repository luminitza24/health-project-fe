import React from 'react';
import { Background } from '../../components/Background/Background';
import { LogInForm } from './LogInForm';

const LogIn = () => {
  return (
    <div className="flex-xl-row flex-sm-column d-flex flex-wrap justify-content-center align-items-center home-container overflow-hidden">
      <div className="col-xl-6 col-lg-12 col-sm-12">
        {' '}
        <LogInForm />{' '}
      </div>
      <div className="col-xl-6 col-lg-12">
        <Background />
      </div>
    </div>
  );
};

export default LogIn;

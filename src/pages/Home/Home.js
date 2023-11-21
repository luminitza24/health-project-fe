import React from 'react';
import { Background } from '../../components/Background/Background';
import { EntryForm } from './EntryForm';

const Home = () => {
  return (
    <div className="flex-xl-row flex-sm-column d-flex flex-wrap home-container">
      <div className="col-xl-6 col-lg-12 col-sm-12 z-3">
        {' '}
        <EntryForm />{' '}
      </div>
      <div className="col-xl-6 col-lg-12">
        <Background />
      </div>
    </div>
  );
};

export default Home;

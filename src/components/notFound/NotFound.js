import React from 'react';
import notfound from '../../pages/Home/images/notfound.png';

const NotFound = () => {
  return (
    <div className="d-flex justify-content-center flex-column">
      <img
        src={notfound}
        alt="Layer"
        className="img-fluid rounded mx-auto d-block img-thumbnail"
      />
      <p class="fs-1 text-warning mx-auto d-block"> 404 </p>
      <p class="fs-4 text-danger mx-auto d-block ">
        The page you're looking for doesn't exist.{' '}
      </p>
    </div>
  );
};
export default NotFound;

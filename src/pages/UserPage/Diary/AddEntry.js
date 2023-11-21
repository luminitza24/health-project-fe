import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const AddEntry = () => {
  const location = useLocation();
  return (
    <>
      <Link
        to={location?.state?.from ?? '/users'}
        className="btn btn-light mb-3 mt-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="9"
          viewBox="0 0 15 9"
          fill="none"
        >
          <path
            d="M14 1.5V4.5H2M2 4.5L5.5 1M2 4.5L5.5 8"
            stroke="black"
            stroke-width="2"
          />
        </svg>
      </Link>
      <form id="add-form" className="form m-3">
        <div className="column">
          <div className="col-10 form-group m-5">
            <input
              type="text"
              className="form-control-custom"
              id="nameP"
              name="nameP"
              placeholder="Enter product name"
              tabIndex="1"
              required
            />
          </div>
          <div className="col-10 form-group m-5">
            <input
              type="text"
              className="form-control-custom"
              id="grams"
              name="grams"
              placeholder="Grams"
              tabIndex="1"
              required
            />
          </div>
          <div className="col-12 m-5 d-flex flex-row justify-content-center">
            <button type="button" className="btn-custom">
              <span>Add</span>
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddEntry;

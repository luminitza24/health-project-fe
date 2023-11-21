import React from 'react';
import PickDate from '../Diary/PickDate';
import { FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export const Journal = () => {
  const navigate = useNavigate();

  const handleAddButtonClick = () => {
    if (window.innerWidth <= 600) {
      navigate('/users/add-diary');
    }
  };
  return (
    <>
      <PickDate />
      <div className="p-3 d-flex flex-xl-column flex-wrap ingredients-container">
        <form id="ingredients-form" className="form">
          <div className="row">
            <div className="col-6 form-group m-2">
              <input
                type="text"
                className="form-control-add form-control-custom"
                id="nameP"
                name="nameP"
                placeholder="Enter product name"
                tabIndex="1"
                required
              />
            </div>
            <div className="col-3 form-group m-2 r-5">
              <input
                type="text"
                className="form-control-add form-control-custom"
                id="grams"
                name="grams"
                placeholder="Grams"
                tabIndex="1"
                required
              />
            </div>
            <div className="col-1">
              <button
                type="button"
                className="btn-custom btn-add d-flex justify-content-center align-content-center"
                onClick={handleAddButtonClick}
              >
                +
              </button>
            </div>
          </div>
        </form>
        <table className="table table-borderless table-responsive table-wrapper-scroll-y custom-scrollbar mt-5 text-nowrap">
          <tbody>
            <tr>
              <td className="addElement text-left w-50">vanata</td>
              <td className="addElement text-left">100 gr</td>
              <td className="addElement text-center">200 kcal</td>
              <td className="fatimes">
                {' '}
                <FaTimes />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

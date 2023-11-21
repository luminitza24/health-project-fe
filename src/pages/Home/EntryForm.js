import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  setFormData,
  selectShowModal,
  selectFormData,
  setShowModal,
} from '../../redux/products/formSlice';
import {
  saveFormData,
  fetchBannedProduct,
} from '../../redux/products/operations';

import { selectBannedProduct } from '../../redux/products/bannedProductSlice';

export const EntryForm = () => {
  const dispatch = useDispatch();
  const formData = useSelector(selectFormData) || {};
  const showModal = useSelector(selectShowModal);
  const bannedProduct = useSelector(selectBannedProduct);

  const [formErrors, setFormErrors] = useState({});
  const isFormValid = () => {
    const errors = {};

    if (!formData.height || formData.height.length !== 3) {
      errors.height = 'Height must be 3 digits long - in cm';
    }

    if (!formData.age || formData.age.length < 1 || formData.age.length > 2) {
      errors.age = 'Age must be between 1 and 2 digits long';
    }

    if (
      !formData.weightC ||
      formData.weightC.length < 2 ||
      formData.weightC.length > 3
    ) {
      errors.weightC = 'Current weight must be between 2 and 3 digits long';
    }

    if (
      !formData.weightD ||
      formData.weightD.length < 2 ||
      formData.weightD.length > 3
    ) {
      errors.weightD = 'Desired weight must be between 2 and 3 digits long';
    }
    setFormErrors(errors);

    return Object.values(errors).length === 0;
  };
  const handleShow = async () => {
    try {
      if (
        isFormValid() &&
        formData.bloodType &&
        formData.bloodType.length === 4
      ) {
        dispatch(saveFormData(formData));
        dispatch(fetchBannedProduct(formData.bloodType));
      } else {
        toast.error('Please complete all your fields');
      }
    } catch (error) {
      toast.error('Please complete all your fields');
    }
  };

  const handleClose = () => {
    dispatch(setShowModal(false));
  };

  const handleInputChange = e => {
    const { name, value } = e.target;

    if (name === 'bloodType') {
      const index = parseInt(value) - 1;
      const updatedBloodType = Array.isArray(formData.bloodType)
        ? [...formData.bloodType]
        : [false, false, false, false];
      for (let i = 0; i < updatedBloodType.length; i++) {
        updatedBloodType[i] = i === index;
      }

      dispatch(setFormData({ ...formData, [name]: updatedBloodType }));
    } else {
      dispatch(setFormData({ ...formData, [name]: value }));
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-10 col-md-12 text-left m-2">
          <h1 className="text-title">
            Calculate your daily calorie intake right now
          </h1>
        </div>
      </div>
      <form
        id="contact-form"
        className="form mt-5"
        action="#"
        onSubmit={e => e.preventDefault()}
      >
        <div className="row">
          <div className="col-12 col-md-6 form-container">
            <div className="form-group m-5">
              <input
                type="text"
                className={`form-control-custom ${
                  formErrors.height ? 'error' : ''
                }`}
                id="height"
                name="height"
                placeholder="Height *"
                tabIndex="1"
                required
                value={formData.height || ''}
                onChange={handleInputChange}
              />
              {formErrors.height && (
                <div className="error-message">{formErrors.height}</div>
              )}
            </div>
            <div className="form-group m-5">
              <input
                type="text"
                className={`form-control-custom ${
                  formErrors.age ? 'error' : ''
                }`}
                id="age"
                name="age"
                placeholder="Age *"
                tabIndex="1"
                required
                value={formData.age || ''}
                onChange={handleInputChange}
              />
              {formErrors.age && (
                <div className="error-message">{formErrors.age}</div>
              )}
            </div>
            <div className="form-group m-5">
              <input
                type="text"
                className={`form-control-custom ${
                  formErrors.weightC ? 'error' : ''
                }`}
                id="weightC"
                name="weightC"
                placeholder="Current Weight *"
                tabIndex="1"
                required
                value={formData.weightC || ''}
                onChange={handleInputChange}
              />
              {formErrors.weightC && (
                <div className="error-message">{formErrors.weightC}</div>
              )}
            </div>
          </div>
          <div className="col-12 col-md-6 cols-2 form-container">
            <div className="form-group m-5">
              <input
                type="text"
                className={`form-control-custom ${
                  formErrors.weightD ? 'error' : ''
                }`}
                id="weightD"
                name="weightD"
                placeholder="Desired weight *"
                tabIndex="1"
                required
                value={formData.weightD || ''}
                onChange={handleInputChange}
              />
              {formErrors.weightD && (
                <div className="error-message">{formErrors.weightD}</div>
              )}
            </div>
            <div className="form-group m-5">
              <input
                type="text"
                className="form-control-custom"
                id="bloodType"
                name="bloodType"
                placeholder="Blood type *"
                tabIndex="1"
                required
                onChange={handleInputChange}
                disabled
              />
              <div className="form-check form-check-inline mt-4">
                <input
                  className="form-check-input"
                  type="radio"
                  name="bloodType"
                  id="bloodType1"
                  value="1"
                  defaultChecked={!formData.bloodType || formData.bloodType[0]}
                  onChange={handleInputChange}
                />
                <label className="form-check-label" htmlFor="bloodType1">
                  1
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="bloodType"
                  id="bloodType2"
                  value="2"
                  defaultChecked={!formData.bloodType || formData.bloodType[1]}
                  onChange={handleInputChange}
                />
                <label className="form-check-label" htmlFor="bloodType2">
                  2
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="bloodType"
                  id="bloodType3"
                  value="3"
                  defaultChecked={!formData.bloodType || formData.bloodType[2]}
                  onChange={handleInputChange}
                />
                <label className="form-check-label" htmlFor="bloodType3">
                  3
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="bloodType"
                  id="bloodType4"
                  value="4"
                  defaultChecked={!formData.bloodType || formData.bloodType[3]}
                  onChange={handleInputChange}
                />
                <label className="form-check-label" htmlFor="bloodType4">
                  4
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex flex-row justify-content-center justify-content-xl-end justify-content-lg-start">
          <button type="button" className="btn-custom" onClick={handleShow}>
            Start losing weight
          </button>
        </div>
      </form>
      <div className="row">
        <Modal size="lg" show={showModal} onHide={handleClose}>
          <Modal.Header closeButton />
          <Modal.Body className="d-flex justify-content-center flex-column m-3">
            <h2 className="text-title-center font-weight-bold">
              Your recommended daily calorie intake is
            </h2>

            <p className="notFood pt-3 mt-5">Foods you should not eat</p>
            <ol className="notFood-list">
              {bannedProduct.slice(0, 4).map((product, index) => (
                <li key={index}>{product.title}</li>
              ))}
            </ol>
          </Modal.Body>
          <Modal.Footer>
            <Button className="btn-modal" onClick={handleClose}>
              Start losing weight
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

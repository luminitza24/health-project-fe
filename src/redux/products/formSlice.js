import { createSlice } from '@reduxjs/toolkit';
import { saveFormData } from './operations';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    formData: {
      height: '',
      age: '',
      weightC: '',
      weightD: '',
      bloodType: [false, false, false, false],
    },
    formCompleted: false,
    showModal: false,
  },
  reducers: {
    setFormData: (state, action) => {
      state.formData = action.payload || {};
    },
    setFormCompleted: (state, action) => {
      state.formCompleted = action.payload;
    },
    setShowModal: (state, action) => {
      state.showModal = action.payload;
    },
    resetForm: state => {
      state.formData = {
        height: '',
        age: '',
        weightC: '',
        weightD: '',
        bloodType: [false, false, false, false],
      };
      state.formCompleted = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(saveFormData.fulfilled, (state, action) => {
        state.showModal = true;
        state.formCompleted = true;
        state.formData = {};
      })
      .addCase(saveFormData.rejected, (state, action) => {
        state.error = true;
        state.isLoading = false;
      });
  },
});

export const { setFormData, setFormCompleted, setShowModal, resetForm } =
  formSlice.actions;

export const selectFormData = state => state.form.formData;
export const selectFormCompleted = state => state.form.formCompleted;
export const selectShowModal = state => state.form.showModal;

export const formReducer = formSlice.reducer;

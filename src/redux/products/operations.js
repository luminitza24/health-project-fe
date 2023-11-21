import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

axios.defaults.baseURL = 'http://localhost:5000/api/';

export const saveFormData = createAsyncThunk(
  'form/saveFormData',
  async (formData, thunkAPI) => {
    try {
      const response = await axios.post('form/saveForm', formData);
      return response.data;
    } catch (error) {
      toast.error('Oops. Something is wrong. Please try again!');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchBannedProduct = createAsyncThunk(
  'form/fetchBannedProduct',
  async (bloodType, thunkAPI) => {
    try {
      const response = await axios.post('/form/fetchBannedProduct', {
        bloodType,
      });
      return response.data;
    } catch (error) {
      toast.error('Oops. Something is wrong. Please try again!');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

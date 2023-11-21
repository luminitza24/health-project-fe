import { createSlice } from '@reduxjs/toolkit';
import { fetchBannedProduct } from './operations';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const bannedProductSlice = createSlice({
  name: 'bannedProduct',
  initialState: {
    bannedProduct: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchBannedProduct.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchBannedProduct.fulfilled, (state, action) => {
        console.log('Fulfilled action:', action);
        state.isLoading = false;
        state.forbiddenProducts = action.payload.forbiddenProducts;
      })
      .addCase(fetchBannedProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        toast.error(
          `${action.payload}` === 'Network Error'
            ? `${action.payload}`
            : 'Something went wrong. Check your data and try again'
        );
      });
  },
});

export const selectBannedProduct = state =>
  state.bannedProduct?.bannedProduct || [];

export const bannedProductReducer = bannedProductSlice.reducer;

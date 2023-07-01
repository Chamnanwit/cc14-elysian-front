import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as agencyService from "../../../api/agency-api";

const initialState = {
    isLoading: true,
};

export const paymentPackageAsync = createAsyncThunk(
  "payment/paymentPackageAsync",
  async (input, thunkApi) => {
    try {
      const res = await agencyService.paymentPackage(input);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const createPaymentAsync = createAsyncThunk(
  "payment/createPaymentAsync",
  async (id, thunkApi) => {
    try {
      const res = await agencyService.createPaymentData(id);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(paymentPackageAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(paymentPackageAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(paymentPackageAsync.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(createPaymentAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createPaymentAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.dataPayment = action.payload;
      })
      .addCase(createPaymentAsync.rejected, (state, action) => {
        state.error = action.payload;
      }),
});

export default paymentSlice.reducer;

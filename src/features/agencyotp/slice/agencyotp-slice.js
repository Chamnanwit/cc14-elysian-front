import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as otpService from "../../../api/otp-api";

const initialState = {
  requestOtp: [],
};

export const requestOtpAsync = createAsyncThunk(
  "agencyOtp/requestOtpAsync",
  async (phoneNumber, thunkApi) => {
    try {
      console.log("in slice", phoneNumber);
      const res = await otpService.requestOtpService(phoneNumber);
      //   console.log("check res.data", res.data);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const verifyPlanAsync = createAsyncThunk(
  "agencyOtp/verifyPlanAsync",
  async (input, thunkApi) => {
    try {
      console.log("check input", input);
      const res = await otpService.verifyOtp(input);
      console.log("check res data", res.data);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

const agencyOtpSlice = createSlice({
  name: "agencyOtp",
  initialState,
  reducers: {
    setSearchValueRedux: (state, action) => {
      state.searchValue = action.payload;
    },
  },

  extraReducers: (builder) =>
    builder
      .addCase(requestOtpAsync.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(requestOtpAsync.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(requestOtpAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(verifyPlanAsync.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(verifyPlanAsync.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(verifyPlanAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      }),
});

export default agencyOtpSlice.reducer;

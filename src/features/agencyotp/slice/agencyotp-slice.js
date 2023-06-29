import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as otpService from "../../../api/otp-api";

const initialState = {
  agencyOtp: [],
};

export const agencyOtpAsync = createAsyncThunk(
  "agent/otpAsync",
  async (input, thunkApi) => {
    try {
      const res = await otpService.getAllAgent();
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

const agencyOtpSlice = createSlice({
  name: "otp",
  initialState,
  reducers: {
    setSearchValueRedux: (state, action) => {
      state.searchValue = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(agencyOtpAsync.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(agencyOtpAsync.fulfilled, (state, action) => {
        // state.isAuthenticated = true;
        state.isLoading = false;
        //state.user = action.payload;
      })

      .addCase(agencyOtpAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      }),
});

export default agencyOtpSlice.reducer;

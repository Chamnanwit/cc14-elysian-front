import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as profileAgncyService from "../../../api/auth-api";

const initialState = {
  profileAgncy: [],
  isLoading: true,
};

export const profileAgncyAsync = createAsyncThunk(
  "profileAgncy/profileAgncyAsync",
  async (_, thunkApi) => {
    try {
      const res = await profileAgncyService.getme();
      console.log(res.data);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const updateprofileAgncyAsync = createAsyncThunk(
  "profileAgncy/updateprofileAgncyAsync",
  async (input, thunkApi) => {
    try {
      console.log("update---------->");
      const res = await profileAgncyService.updateprofileagency(input);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

const profileAgncySlice = createSlice({
  name: "profileAgncy",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(profileAgncyAsync.pending, (state) => {
        // state.initialLoading = true;
      })
      .addCase(profileAgncyAsync.fulfilled, (state, action) => {
        state.profileAgncy = action.payload;
        state.isLoading = false;
      })
      .addCase(profileAgncyAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      }),
});

export default profileAgncySlice.reducer;

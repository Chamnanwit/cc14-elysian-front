import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as profileAgncyService from "../../../api/agency-api";
import * as authService from "../../../api/auth-api";

const initialState = {
  profileAgncy: [],
  isLoading: true,
};

export const profileAgncyAsync = createAsyncThunk(
  "profileAgncy/profileAgncyAsync",
  async (_, thunkApi) => {
    try {
      const res = await authService.fetchMe();
      console.log("from my profileSlice", res.data);
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
    console.log(input);
    try {
      const res = await authService.updateAgency(input);
      console.log("update---------->", res.data);
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
      })
      .addCase(updateprofileAgncyAsync.pending, (state) => {
        // state.initialLoading = true;
      })
      .addCase(updateprofileAgncyAsync.fulfilled, (state, action) => {
        state.profileAgncy = action.payload;
        state.isLoading = false;
      })
      .addCase(updateprofileAgncyAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      }),
});

export default profileAgncySlice.reducer;

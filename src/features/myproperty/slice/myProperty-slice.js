import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as myPropertyService from "../../../api/property-api";

const initialState = {
  myPropertyPlan: [],
  isLoading: true,
};

export const myPropertyAsync = createAsyncThunk(
  "myProperty/myPropertyAsync",
  async (_, thunkApi) => {
    try {
      const res = await myPropertyService.getPropperty();
      console.log(res.data);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

const myPropertySlice = createSlice({
  name: "myProperty",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(myPropertyAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(myPropertyAsync.fulfilled, (state, action) => {
        state.myPropertyPlan = action.payload;
        state.isLoading = false;
      })
      .addCase(myPropertyAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      }),
});

export default myPropertySlice.reducer;

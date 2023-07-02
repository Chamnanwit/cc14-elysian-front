import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as adminService from "../../../api/admin-api";

const initialState = {
  dashboardResult: {},
  dashboardAgentResult: {},
  isLoading: true,
};

export const dashboardAsync = createAsyncThunk(
  "dashboard/dashboardAsync",
  async (_, thunkApi) => {
    try {
      const res = await adminService.getDashboard();
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const dashboardAgentAsync = createAsyncThunk(
  "dashboard/dashboardAgentAsync",
  async (id, thunkApi) => {
    try {
      const res = await adminService.getDashboardAgent(id);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(dashboardAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(dashboardAsync.fulfilled, (state, action) => {
        state.dashboardResult = action.payload;
        state.isLoading = false;
      })
      .addCase(dashboardAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(dashboardAgentAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(dashboardAgentAsync.fulfilled, (state, action) => {
        state.dashboardAgentResult = action.payload;
        state.isLoading = false;
      })
      .addCase(dashboardAgentAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      }),
});

export default dashboardSlice.reducer;

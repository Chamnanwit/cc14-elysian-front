import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as pricingPlanService from "../../../api/package-api";

const initialState = {
    pricingPlan: [],
    isLoading: true
};

export const pricingPlanAsync = createAsyncThunk(
  "pricingPlan/pricingPlanAsync",
  async (_, thunkApi) => {
    try {
      const res = await pricingPlanService.getPricingPlan();
      console.log(res.data)
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const createPricingPlanAsync = createAsyncThunk(
  "pricingPlan/createPricingPlanAsync",
  async (input, thunkApi) => {
    try {
      const res = await pricingPlanService.createPricingPlan(input);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);


export const updatePricingPlanAsync = createAsyncThunk(
  "pricingPlan/updatePricingPlanAsync",
  async (input, thunkApi) => {
    try {
      console.log('-------- >',input)
      const res = await pricingPlanService.updatePricingPlan(input);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const deletePricingPlanAsync = createAsyncThunk(
  "pricingPlan/deletePricingPlanAsync",
  async (id, thunkApi) => {
    try {
      const res = await pricingPlanService.deletePricingPlan(id);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

const pricingPlanSlice = createSlice({
    name: "pricingPlan",
    initialState,
    extraReducers: (builder) =>
    builder
    .addCase(pricingPlanAsync.pending, state => {
      // state.initialLoading = true;
  })
    .addCase(pricingPlanAsync.fulfilled, (state, action) => {
        state.pricingPlan = action.payload;
        state.isLoading = false;
    })
    .addCase(pricingPlanAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
    })
    
    
});

export default pricingPlanSlice.reducer;
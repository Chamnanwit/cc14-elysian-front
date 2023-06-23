import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as pricingPlanService from "../../../api/pricingPlan-api";

const initialState = {
    pricingPlan: []
};

export const pricingPlanAsync = createAsyncThunk(
    "pricingPlan/pricingPlanAsync",
    async (_, thunkApi) => {
      try {
        // console.log(input);
        const res = await pricingPlanService.getPricingPlan();
        // setAccessToken(res.data.accessToken);
        // const resFetchMe = await groupService.fetchMe();
        return res.data;   // ส่งไป set ค่าใน reducer
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
        // console.log(input);
        const res = await pricingPlanService.createPricingPlan(input);
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
    .addCase(pricingPlanAsync.fulfilled, (state, action) => {
        state.pricingPlan = action.payload;
        state.initialLoading = false;
    })
    .addCase(pricingPlanAsync.rejected, (state, action) => {
        state.error = action.payload;
    })
    .addCase(pricingPlanAsync.pending, state => {
        // state.initialLoading = true;
    })
});

export default pricingPlanSlice.reducer;
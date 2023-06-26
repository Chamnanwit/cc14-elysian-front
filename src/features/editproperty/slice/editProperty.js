import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as propertyPlanService from "../../../api/property-api";
import { Input } from "postcss";
import { pricingPlanAsync } from "../../packages/slice/pricingPlan-slice";

const initialState = {
  propertyPlan: [],
  isLoading: true,
};

export const propertyPlanAsync = createAsyncThunk(
  "propertyPlan/propertyPlanAsync",
  async (_, thunkApi) => {
    try {
      const res = await propertyPlanService.getPropperty();
      console.log(res.data);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const createPropertyPlanAsync = createAsyncThunk(
  "propertyPlan/createPropertyPlanAsync",
  async (input, thunkApi) => {
    try {
      const res = await propertyPlanService.creatPropperty(input);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const updatePropertyPlanAsync = createAsyncThunk(
  "propertyPlan/updatePropertyPlanAsync",
  async (input, thunkApi) => {
    try {
      console.log("update---->", input);
      const res = await propertyPlanService.updateProperty(input);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const deletePropertyPlanAsync = createAsyncThunk(
  "propertyPlan/deletePropertyPlanAsync",
  async (id, thunkApi) => {
    try {
      const res = await propertyPlanService.deleteProperty(id);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

const propertyPlanSlice = createSlice({
  name: "propertyPlan",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(propertyPlanAsync.pending, (state) => {
        // state.initialLoading = true;
      })
      .addCase(propertyPlanAsync.fulfilled, (state, action) => {
        state.propertyPlan = action.payload;
        state.isLoading = false;
      })
      .addCase(propertyPlanAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      }),
});

export default propertyPlanSlice.reducer;

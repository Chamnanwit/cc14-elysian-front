import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as PropertyService from "../../../api/property-api";

const initialState = {
  propertyPlan: [],
  animity: [],
  isLoading: true,
};

export const PropertyAsync = createAsyncThunk(
  "propertyPlan/pricingPlanAsync",
  async (id, thunkApi) => {
    try {
      const res = await PropertyService.getPropertyUserById(id);
      // console.log("IN Slice ----->", res.data);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);
export const createPropertyAsync = createAsyncThunk(
  "propertyPlan/createPropertyAsync",
  async (input, thunkApi) => {
    try {
      const res = await PropertyService.creatProperty(input);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const updatePropertyAsync = createAsyncThunk(
  "propertyPlan/updatePropertyAsync",
  async (input, thunkApi) => {
    try {
      const res = await PropertyService.updateProperty(input);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);
export const deletePropertyAsync = createAsyncThunk(
  "propertyPlan/deletePropertyAsync",
  async (id, thunkApi) => {
    console.log("IN SLICE ID--->", id);
    try {
      const res = await PropertyService.deleteProperty(id);
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
  reducers: {},

  extraReducers: (builder) =>
    builder
      .addCase(PropertyAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(PropertyAsync.fulfilled, (state, action) => {
        state.propertyPlan = action.payload;
        state.isLoading = false;
      })
      .addCase(PropertyAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(createPropertyAsync.pending, (state) => {
        // state.initialLoading = true;
      })
      .addCase(createPropertyAsync.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(createPropertyAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(updatePropertyAsync.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(updatePropertyAsync.fulfilled, (state, action) => {
        // state.isAuthenticated = true;
        state.isLoading = false;
        //state.user = action.payload;
      })
      .addCase(updatePropertyAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      }),
});

export default propertyPlanSlice.reducer;

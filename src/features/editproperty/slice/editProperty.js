import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as propertyPlanService from "../../../api/property-api";
import { Input } from "postcss";

const initialState = {
  propertyPlan: [],
  UserPropertyPlan: [],
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
export const getAllPropertyPlanAsync = createAsyncThunk(
  "propertyPlan/getAllPropertyPlanAsync",
  async (id, thunkApi) => {
    try {
      const res = await propertyPlanService.getPropertyUserById(id);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

const editPropertyPlanSlice = createSlice({
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
      })
      .addCase(createPropertyPlanAsync.pending, (state) => {
        // state.initialLoading = true;
      })
      .addCase(createPropertyPlanAsync.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(createPropertyPlanAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(updatePropertyPlanAsync.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(updatePropertyPlanAsync.fulfilled, (state, action) => {
        // state.isAuthenticated = true;
        state.isLoading = false;
        //state.user = action.payload;
      })
      .addCase(updatePropertyPlanAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(getAllPropertyPlanAsync.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(getAllPropertyPlanAsync.fulfilled, (state, action) => {
        state.UserPropertyPlan = action.payload;
        state.isLoading = false;
      })
      .addCase(getAllPropertyPlanAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      }),
});

export default editPropertyPlanSlice.reducer;

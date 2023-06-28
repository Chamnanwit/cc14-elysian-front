import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as pricingPlanService from "../../../api/package-api";

const initialState = {
    pricingPlan: [],
    pricingPlanFilter: [],
    searchValue: "",
    isLoading: true
};

export const pricingPlanAsync = createAsyncThunk(
  "pricingPlan/pricingPlanAsync",
  async (_, thunkApi) => {
    try {
      const res = await pricingPlanService.getPricingPlan();
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

export const searchPricingPlanAsync = createAsyncThunk(
  "pricingPlan/searchPricingPlanAsync",
  async (input, thunkApi) => {
    try {
      const Value  = input
      const res = await pricingPlanService.getPricingPlan();
      if (Value.trim()==="") {
        return res.data
      } else {
        const filteredData = res.data.filter((el) =>
          el.name.toLowerCase().includes(Value.toLowerCase())
        );
        return filteredData;
      }
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

const pricingPlanSlice = createSlice({
    name: "pricingPlan",
    initialState,
    reducers:{ 
      setSearchValueRedux :(state, action) => {
      state.searchValue = action.payload
    }
    },
    extraReducers: (builder) =>
    builder
    .addCase(pricingPlanAsync.pending, state => {
      // state.initialLoading = true;
    })
    .addCase(pricingPlanAsync.fulfilled, (state, action) => {
        state.pricingPlan = action.payload;
        if(state.searchValue.trim() === "") state.pricingPlanFilter = state.pricingPlan
        else {state.pricingPlanFilter = action.payload.filter((el) =>
        el.name.toLowerCase().includes(state.searchValue.toLowerCase())
      )}
        state.isLoading = false;
    })
    .addCase(pricingPlanAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
    })
    .addCase(createPricingPlanAsync.pending, state => {
      // state.initialLoading = true;
    })
    .addCase(createPricingPlanAsync.fulfilled, (state, action) => {
        state.isLoading = false;
    })
    .addCase(createPricingPlanAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
    })
    .addCase(updatePricingPlanAsync.pending, (state) => {
      state.isLoading = false;
    })
    .addCase(updatePricingPlanAsync.fulfilled, (state, action) => {
      // state.isAuthenticated = true;
      state.isLoading = false;
      //state.user = action.payload;
    })
    .addCase(updatePricingPlanAsync.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    })
    .addCase(searchPricingPlanAsync.pending, state => {
      // state.initialLoading = true;
    })
    .addCase(searchPricingPlanAsync.fulfilled, (state, action) => {
      state.pricingPlanFilter = action.payload;
      state.isLoading = false;
    })
    .addCase(searchPricingPlanAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
    })
});



export default pricingPlanSlice.reducer;

export const {
  setSearchValueRedux,
} = pricingPlanSlice.actions;
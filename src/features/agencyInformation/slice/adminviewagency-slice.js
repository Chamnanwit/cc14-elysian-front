import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as agentService from "../../../api/agency-api";

const initialState = {
    agentList: [],
    agentListFilter: [],
    isLoading: true
};

export const agentAsync = createAsyncThunk(
    "agent/agentAsync",
    async (_, thunkApi) => {
      try {
        const res = await agentService.getAllAgent();
        return res.data;
      } catch (err) {
        console.log(err);
        return thunkApi.rejectWithValue(err.response.data.message);
      }
    }
);


const adminViewAgentSlice = createSlice({
    name: "agent",
    initialState,
    reducers:{ 
    },
    extraReducers: (builder) =>
    builder
    .addCase(agentAsync.pending, state => {
      // state.initialLoading = true;
    })
    .addCase(agentAsync.fulfilled, (state, action) => {
        state.agentList = action.payload;
    //     if(state.searchValue.trim() === "") state.pricingPlanFilter = state.pricingPlan
    //     else {state.pricingPlanFilter = action.payload.filter((el) =>
    //     el.name.toLowerCase().includes(state.searchValue.toLowerCase())
    //   )}
        state.isLoading = false;
    })
    .addCase(agentAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
    })
    // .addCase(createPricingPlanAsync.pending, state => {
    //   // state.initialLoading = true;
    // })
    // .addCase(createPricingPlanAsync.fulfilled, (state, action) => {
    //     state.isLoading = false;
    // })
    // .addCase(createPricingPlanAsync.rejected, (state, action) => {
    //     state.error = action.payload;
    //     state.isLoading = false;
    // })
    // .addCase(updatePricingPlanAsync.pending, (state) => {
    //   state.isLoading = false;
    // })
    // .addCase(updatePricingPlanAsync.fulfilled, (state, action) => {
    //   // state.isAuthenticated = true;
    //   state.isLoading = false;
    //   //state.user = action.payload;
    // })
    // .addCase(updatePricingPlanAsync.rejected, (state, action) => {
    //   state.error = action.payload;
    //   state.isLoading = false;
    // })
    // .addCase(searchPricingPlanAsync.pending, state => {
    //   // state.initialLoading = true;
    // })
    // .addCase(searchPricingPlanAsync.fulfilled, (state, action) => {
    //   state.pricingPlanFilter = action.payload;
    //   state.isLoading = false;
    // })
    // .addCase(searchPricingPlanAsync.rejected, (state, action) => {
    //     state.error = action.payload;
    //     state.isLoading = false;
    // })
});

export default adminViewAgentSlice.reducer;

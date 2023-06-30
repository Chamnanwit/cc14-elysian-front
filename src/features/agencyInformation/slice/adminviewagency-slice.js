import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as agentService from "../../../api/agency-api";

const initialState = {
    agentList: [],
    agentById: {},
    agentListFilter: [],
    searchValue: "",
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

export const agentByIdAsync = createAsyncThunk(
  "agent/agentByIdAsync",
  async (id, thunkApi) => {
    try {
      const res = await agentService.getAgentById(id);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const deleteagentAsync = createAsyncThunk(
  "agent/deleteagentAsync",
  async (id, thunkApi) => {
    try {
      const res = await agentService.deleteAgent(id);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);


export const updateAgentAsync = createAsyncThunk(
  "agent/updateAgentAsync",
  async (input, thunkApi) => {
    try {
      const res = await agentService.updateAgent(input);
      return res.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const searchAgentAsync = createAsyncThunk(
  "agent/searchAgentAsync",
  async (input, thunkApi) => {
    try {
      const Value = input;
      const res = await agentService.getAllAgent();
      if (Value.trim() === "") {
        return res.data;
      } else {
        const filteredData = res.data.filter(
          (el) =>
            el.firstName.toLowerCase().includes(Value.toLowerCase()) ||
            el.lastName.toLowerCase().includes(Value.toLowerCase()) ||
            el.email.toLowerCase().includes(Value.toLowerCase())
        );
        return filteredData;
      }
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

const adminViewAgentSlice = createSlice({
    name: "agent",
    initialState,
    reducers: {
      setSearchValueRedux: (state, action) => {
        state.searchValue = action.payload;
      },
    },
    extraReducers: (builder) =>
    builder
    .addCase(agentAsync.pending, state => {
      // state.initialLoading = true;
    })
    .addCase(agentAsync.fulfilled, (state, action) => {
        state.agentList = action.payload;
        if (state.searchValue.trim() === "")
          state.agentListFilter = state.agentList;
        else {
          state.agentListFilter = action.payload.filter(
            (el) =>
              el.firstName
                .toLowerCase()
                .includes(state.searchValue.toLowerCase()) ||
              el.lastName
                .toLowerCase()
                .includes(state.searchValue.toLowerCase()) ||
              el.email.toLowerCase().includes(state.searchValue.toLowerCase())
          );
      }
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
    .addCase(updateAgentAsync.pending, (state) => {
      state.isLoading = false;
    })
    .addCase(updateAgentAsync.fulfilled, (state, action) => {
      // state.isAuthenticated = true;
      state.isLoading = false;
      //state.user = action.payload;
    })
    .addCase(updateAgentAsync.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    })
    .addCase(searchAgentAsync.pending, (state) => {
      // state.initialLoading = true;
    })
    .addCase(searchAgentAsync.fulfilled, (state, action) => {
      state.agentListFilter = action.payload;
      state.isLoading = false;
    })
    .addCase(searchAgentAsync.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    })
    .addCase(agentByIdAsync.pending, state => {
        state.isLoading = true;
    })
    .addCase(agentByIdAsync.fulfilled, (state, action) => {
        state.agentById = action.payload;
        state.isLoading = false;
    })
    .addCase(agentByIdAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
    })
});

export default adminViewAgentSlice.reducer;
export const { setSearchValueRedux } = adminViewAgentSlice.actions;
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as adminInformationService from "../../../api/admin-api";

const initialState = {
  adminInformation: [],
  adminInformationFilter: [],
  searchValue: "",
  isLoading: true,
};

export const adminInformationAsync = createAsyncThunk(
  "adminInformation/adminInformationAsync",
  async (_, thunkApi) => {
    try {
      const res = await adminInformationService.getAdminInformation();
      // console.log(res.data);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const createAdminInformationAsync = createAsyncThunk(
  "adminInformation/createAdminInformationAsync",
  async (input, thunkApi) => {
    try {
      const res = await adminInformationService.createAdminInformation(input);
      //   console.log(res.data);
      return res.data;
    } catch (err) {
      //   console.log(err);
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const updateAdminInformationAsync = createAsyncThunk(
  "adminInformation/updateAdminInformationAsync",
  async (input, thunkApi) => {
    try {
      const res = await adminInformationService.updateAdminInformation(input);
      //   console.log(res.data);
      return res.data;
    } catch (err) {
      //   console.log(err);
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const deleteAdminInformationAsync = createAsyncThunk(
  "adminInformation/deleteAdminInformationAsync",
  async (id, thunkApi) => {
    try {
      const res = await adminInformationService.deleteAdminInformation(id);
      // console.log(res.data);
      return res.data;
    } catch (err) {
      //   console.log(err);
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const searchAdminInformationAsync = createAsyncThunk(
  "adminInformation/searchAdminInformationAsync",
  async (input, thunkApi) => {
    try {
      const Value = input;
      const res = await adminInformationService.getAdminInformation();
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

const adminInformationSlice = createSlice({
  name: "adminInformation",
  initialState,
  reducers: {
    setSearchValueRedux: (state, action) => {
      state.searchValue = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(adminInformationAsync.pending, (state) => {
        // state.initialLoading = true;
      })
      .addCase(adminInformationAsync.fulfilled, (state, action) => {
        state.adminInformation = action.payload;
        if (state.searchValue.trim() === "")
          state.adminInformationFilter = state.adminInformation;
        else {
          state.adminInformationFilter = action.payload.filter(
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
      .addCase(adminInformationAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(createAdminInformationAsync.pending, (state) => {
        // state.initialLoading = true;
      })
      .addCase(createAdminInformationAsync.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(createAdminInformationAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(deleteAdminInformationAsync.pending, (state) => {
        // state.initialLoading = true;
      })
      .addCase(deleteAdminInformationAsync.fulfilled, (state, action) => {
        // state.initialLoading = true;
      })
      .addCase(deleteAdminInformationAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(updateAdminInformationAsync.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(updateAdminInformationAsync.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(updateAdminInformationAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(searchAdminInformationAsync.pending, (state) => {
        // state.initialLoading = true;
      })
      .addCase(searchAdminInformationAsync.fulfilled, (state, action) => {
        state.adminInformationFilter = action.payload;
        state.isLoading = false;
      })
      .addCase(searchAdminInformationAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      }),
});

export default adminInformationSlice.reducer;

export const { setSearchValueRedux } = adminInformationSlice.actions;

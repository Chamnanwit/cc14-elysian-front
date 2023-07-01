import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as adminService from "../../../api/admin-api";

const initialState = {
    purchase: [],
    purchaseFilter: [],
    searchValue: "",
    isLoading: true
};

export const purchaseHistoryAsync = createAsyncThunk(
    "purchaseHistory/purchaseHistoryAsync",
    async (_, thunkApi) => {
      try {
        const res = await adminService.getAllHistory();
        return res.data;
      } catch (err) {
        console.log(err);
        return thunkApi.rejectWithValue(err.response.data.message);
      }
    }
);


export const searchPurchaseHistoryAsync = createAsyncThunk(
  "purchaseHistory/searchPurchaseHistoryAsync",
  async (input, thunkApi) => {
    try {
      const Value = input;
      const res = await adminService.getAllHistory();
      if (Value.trim() === "") {
        return res.data;
      } else {
        const filteredData = res.data.filter(
          (el) =>
            el?.User?.firstName.toLowerCase().includes(Value.toLowerCase()) ||
            el?.User?.lastName.toLowerCase().includes(Value.toLowerCase())
        );
        return filteredData;
      }
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

const purchaseHistorySlice = createSlice({
    name: "purchaseHistory",
    initialState,
    reducers: {
      setSearchValueRedux: (state, action) => {
        state.searchValue = action.payload;
      },
    },
    extraReducers: (builder) =>
    builder
    .addCase(purchaseHistoryAsync.pending, state => {
      state.isLoading = true;
    })
    .addCase(purchaseHistoryAsync.fulfilled, (state, action) => {
        state.purchase = action.payload;
        if (state.searchValue.trim() === "")
          state.purchaseFilter = state.purchase;
        else {
          state.purchaseFilter = action.payload.filter(
            (el) =>
              el?.User?.firstName
                .toLowerCase()
                .includes(state.searchValue.toLowerCase()) ||
              el?.User?.lastName
                .toLowerCase()
                .includes(state.searchValue.toLowerCase())
          );
      }
        state.isLoading = false;
    })
    .addCase(purchaseHistoryAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
    })
    .addCase(searchPurchaseHistoryAsync.pending, (state) => {
      // state.initialLoading = true;
    })
    .addCase(searchPurchaseHistoryAsync.fulfilled, (state, action) => {
      state.purchaseFilter = action.payload;
      state.isLoading = false;
    })
    .addCase(searchPurchaseHistoryAsync.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    }),
});

export default purchaseHistorySlice.reducer;
export const { setSearchValueRedux } = purchaseHistorySlice.actions;
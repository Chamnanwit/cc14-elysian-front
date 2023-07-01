import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as searchService from "../../../api/search-api";

const initialState = {
  searchList: [], ///1. สร้างเพื่อเก็บข้อมูลที่มาจากหลังบ้าน
};

export const searchListAsync = createAsyncThunk(
  "searchList/searchListAsync",
  async (_, thunkApi) => {
    ///2. ถ้าต้องการส่งอะไรไปหลังบ้าน ตรง __จะเป้น input
    try {
      // console.log(input);
      const res = await searchService.getRoomTypeProvince(); ///3. ยิง axios เพื่อขอข้อมูลหลังบ้าน

      //   console.log(res.data);
      return res.data; // ส่งไป set ค่าใน reducer
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

const searchListSlice = createSlice({
  ///4.
  name: "searchList",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(searchListAsync.pending, (state) => {})
      .addCase(searchListAsync.fulfilled, (state, action) => {
        state.searchList = action.payload; ///5.action.payload; มาจากหลังบ้าน
        // console.log("show me", state.searchList);
        state.isLoading = false;
      })
      .addCase(searchListAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      }),
});

export default searchListSlice.reducer; /// ต้องตรงกับ store

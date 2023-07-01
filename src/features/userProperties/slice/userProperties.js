import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as userPropertiesService from "../../../api/property-api";

const initialState = {
  userProperties: [], ///1. สร้างเพื่อเก็บข้อมูลที่มาจากหลังบ้าน
  isLoading: true,
};

export const userPropertiesAsync = createAsyncThunk(
  "userProperties/userPropertiesAsync",
  async (_, thunkApi) => {
    ///2. ถ้าต้องการส่งอะไรไปหลังบ้าน ตรง __จะเป้น input
    try {
      // console.log(input);
      const res = await userPropertiesService.getAllProperty(); ///3. ยิง axios เพื่อขอข้อมูลหลังบ้าน
      // setAccessToken(res.data.accessToken);
      // const resFetchMe = await groupService.fetchMe();
      console.log(res.data);
      return res.data; // ส่งไป set ค่าใน reducer
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const userPropertiesByIdAsync = createAsyncThunk(
  "userProperties/userPropertiesByIdAsync",
  async (id, thunkApi) => {
    try {
      const res = await userPropertiesService.getPropertyById(id);

      console.log(res.data);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

const userPropertiesSlice = createSlice({
  ///4.
  name: "userProperties",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(userPropertiesAsync.pending, (state) => {
        // state.initialLoading = true;
      })
      .addCase(userPropertiesAsync.fulfilled, (state, action) => {
        state.userProperties = action.payload; ///5.action.payload; มาจากหลังบ้าน
        state.isLoading = false;
      })
      .addCase(userPropertiesAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })

      .addCase(userPropertiesByIdAsync.pending, (state) => {
        // state.initialLoading = true;
      })
      .addCase(userPropertiesByIdAsync.fulfilled, (state, action) => {
        state.userProperties = action.payload; ///5.action.payload; มาจากหลังบ้าน
        state.isLoading = false;
      })
      .addCase(userPropertiesByIdAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      }),
});

export default userPropertiesSlice.reducer; /// ต้องตรงกับ store

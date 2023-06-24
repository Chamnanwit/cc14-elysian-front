import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as userPropertiesService from "../../../api/package-api";

const initialState = {
  userProperties: [],
  isLoading: true,
};

export const userPropertiesAsync = createAsyncThunk(
  "userProperties/userPropertiesAsync",
  async (_, thunkApi) => {
    try {
      // console.log(input);
      const res = await userPropertiesService.getAllProperty();
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

// export const createPricingPlanAsync = createAsyncThunk(
//   "pricingPlan/createPricingPlanAsync",
//   async (input, thunkApi) => {
//     try {
//       // console.log(input);
//       const res = await pricingPlanService.createPricingPlan(input);
//       return res.data;
//     } catch (err) {
//       console.log(err);
//       return thunkApi.rejectWithValue(err.response.data.message);
//     }
//   }
// );

const userPropertiesSlice = createSlice({
  name: "userProperties",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(userPropertiesAsync.pending, (state) => {
        // state.initialLoading = true;
      })
      .addCase(userPropertiesAsync.fulfilled, (state, action) => {
        state.pricingPlan = action.payload;
        state.isLoading = false;
      })
      .addCase(userPropertiesAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      }),
});

export default userPropertiesSlice.reducer;

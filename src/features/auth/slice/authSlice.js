import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as authService from "../../../api/auth-api";
import { removeAccessToken, setAccessToken } from "../../../utils/localstorage";
import { build } from "joi";

const initialState = {
  isAuthenticated: false,
  emailStatus: "",
  authemail: [],
  error: null,
  isLoading: false,
  user: null,
  initialLoading: false,
};

export const registerAsync = createAsyncThunk(
  "auth/registerAsync",
  async (input, thunkApi) => {
    try {
      //console.log(input);
      const res = await authService.register(input);
      setAccessToken(res.data.accessToken);
      const resFetchMe = await authService.fetchMe();
      return resFetchMe.data.user;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const loginAsync = createAsyncThunk(
  "auth/loginAsync",
  async (input, thunkApi) => {
    try {
      const res = await authService.login(input);
      setAccessToken(res.data.accessToken);
      const resFetchMe = await authService.fetchMe();
      return resFetchMe.data.user;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const checkMeAsync = createAsyncThunk(
  "auth/checkMeAsync",
  async (email, thunkApi) => {
    try {
      const res = await authService.checkMe({ email });
      return res.data.emailStatus;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(checkMeAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(checkMeAsync.fulfilled, (state, action) => {
        state.emailStatus = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(checkMeAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      }),
});
export default authSlice.reducer;

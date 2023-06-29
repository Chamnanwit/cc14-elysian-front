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
      // console.log("------*---->", input);
      const res = await authService.register(input);
      setAccessToken(res.data.accessToken);
      const resFetchMe = await authService.fetchMe();
      console.log("resFetceMe", resFetchMe.data.user);
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
      console.log("input in slice", input);
      const res = await authService.login(input);
      setAccessToken(res.data.accessToken);
      const resFetchMe = await authService.fetchMe();
      // console.log("res in slice", resFetchMe.data.user);
      return resFetchMe.data.user;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const fetchMe = createAsyncThunk("auth/fetchMe", async (_, thunkApi) => {
  try {
    const res = await authService.fetchMe();
    return res.data.user;
  } catch (err) {
    return thunkApi.rejectWithValue(err.response.data.message);
  }
});

export const checkMeAsync = createAsyncThunk(
  "auth/checkMeAsync",
  async (email, thunkApi) => {
    try {
      console.log("email in slice", email);
      const res = await authService.checkMe({ email });
      console.log("emailStatus IN Slice", res.data.emailStatus);
      return res.data.emailStatus;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);
export const logout = createAsyncThunk("auth/logout", async () => {
  removeAccessToken();
});

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
      })
      .addCase(registerAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerAsync.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(registerAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(loginAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchMe.pending, (state) => {
        state.initialLoading = true;
      })
      .addCase(fetchMe.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload;
        state.initialLoading = false;
      })
      .addCase(fetchMe.rejected, (state, action) => {
        state.error = action.payload;
        state.initialLoading = false;
      }),
});
export default authSlice.reducer;

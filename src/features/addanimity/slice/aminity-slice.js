import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as animityService from "../../../api/animity-api";

const initialState = {
  animity: [],
  animityRoom: [],
  animityCommon: [],
  animityRoomFilter: [],
  animityCommonFilter: [],
  searchValueRoom: "",
  searchValueCommon: "",
  isLoading: true,
};

export const animityAsync = createAsyncThunk(
  "animity/animityAsync",
  async (_, thunkApi) => {
    try {
      const res = await animityService.getAnimityAll();
      // console.log("IN SLICE animityAsync ----> ", res.data);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const createAnimityAsync = createAsyncThunk(
  "animity/createAnimityAsync",
  async (input, thunkApi) => {
    try {
      const res = await animityService.createAnimity(input);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const updateAnimityAsync = createAsyncThunk(
  "animity/updateAnimityAsync",
  async (input, thunkApi) => {
    try {
      const res = await animityService.updateAnimity(input);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const deleteAnimityAsync = createAsyncThunk(
  "animity/deleteAnimityAsync",
  async (id, thunkApi) => {
    try {
      const res = await animityService.deleteAnimity(id);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const searchAnimityRoomAsync = createAsyncThunk(
  "animity/searchAnimityRoomAsync",
  async (input, thunkApi) => {
    try {
      const Value = input;
      const res = await animityService.getAnimityAll();
      if (Value.trim() === "") {
        return res.data.filter((el) => el.type === "ROOM");
      } else {
        const filteredData = res.data.filter(
          (el) =>
            el.name.toLowerCase().includes(Value.toLowerCase()) &&
            el.type === "ROOM"
        );
        return filteredData;
      }
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const searchAnimityCommonAsync = createAsyncThunk(
  "animity/searchAnimityCommonAsync",
  async (input, thunkApi) => {
    try {
      const Value = input;
      const res = await animityService.getAnimityAll();
      if (Value.trim() === "") {
        return res.data.filter((el) => el.type === "COMMON");
      } else {
        const filteredData = res.data.filter(
          (el) =>
            el.name.toLowerCase().includes(Value.toLowerCase()) &&
            el.type === "COMMON"
        );
        return filteredData;
      }
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

const animitySlice = createSlice({
  name: "animity",
  initialState,
  reducers: {
    setSearchValueRoom: (state, action) => {
      state.searchValueRoom = action.payload;
    },
    setSearchValueCommon: (state, action) => {
      state.searchValueCommon = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(animityAsync.pending, (state) => {
        // state.initialLoading = true;
      })
      .addCase(animityAsync.fulfilled, (state, action) => {
        state.animityRoom = action.payload.filter((el) => el.type === "ROOM");
        state.animityCommon = action.payload.filter(
          (el) => el.type === "COMMON"
        );
        if (state.searchValueRoom.trim() === "")
          state.animityRoomFilter = state.animityRoom;
        else {
          state.animityRoomFilter = action.payload.filter(
            (el) =>
              el.name
                .toLowerCase()
                .includes(state.searchValueRoom.toLowerCase()) &&
              el.type === "ROOM"
          );
        }
        if (state.searchValueCommon.trim() === "")
          state.animityCommonFilter = state.animityCommon;
        else {
          state.animityCommonFilter = action.payload.filter(
            (el) =>
              el.name
                .toLowerCase()
                .includes(state.searchValueCommon.toLowerCase()) &&
              el.type === "COMMON"
          );
        }
        state.isLoading = false;
      })
      .addCase(animityAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(createAnimityAsync.pending, (state) => {
        // state.initialLoading = true;
      })
      .addCase(createAnimityAsync.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(createAnimityAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(updateAnimityAsync.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(updateAnimityAsync.fulfilled, (state, action) => {
        // state.isAuthenticated = true;
        state.isLoading = false;
        //state.user = action.payload;
      })
      .addCase(updateAnimityAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })

      .addCase(searchAnimityRoomAsync.pending, (state) => {
        // state.initialLoading = true;
      })
      .addCase(searchAnimityRoomAsync.fulfilled, (state, action) => {
        state.animityRoomFilter = action.payload;
        state.isLoading = false;
      })
      .addCase(searchAnimityRoomAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(searchAnimityCommonAsync.pending, (state) => {
        // state.initialLoading = true;
      })
      .addCase(searchAnimityCommonAsync.fulfilled, (state, action) => {
        state.animityCommonFilter = action.payload;
        state.isLoading = false;
      })
      .addCase(searchAnimityCommonAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      }),
});

export default animitySlice.reducer;

export const { setSearchValueRoom, setSearchValueCommon } =
  animitySlice.actions;

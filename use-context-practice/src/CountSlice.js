import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const asyncUpFetch = createAsyncThunk(
  "countSlice/asyncUpFetch",
  async () => {
    const response = await axios.get("http://localhost:3010/count");

    return response.data.count;
  }
);

const countSlice = createSlice({
  name: "countSlice",
  initialState: {
    count: 0,
    isLoading: false,
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
    decrementByAmount: (state, action) => {
      state.count -= action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(asyncUpFetch.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(asyncUpFetch.fulfilled, (state, action) => {
      state.count = action.payload;
      state.isLoading = false;
    });
    builder.addCase(asyncUpFetch.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { increment, decrement, incrementByAmount, decrementByAmount } =
  countSlice.actions;

export default countSlice;
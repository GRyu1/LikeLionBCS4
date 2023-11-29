import { createSlice } from "@reduxjs/toolkit";
import {
  createTodo,
  deleteTodo,
  getTodos,
  toggleDone,
  updateTodo,
} from "./appThunk";

const appSlice = createSlice({
  name: "appSlice",
  initialState: {
    todos: null,
    isLoading: false,
  },
  extraReducers: (builder) => {
    builder.addCase(createTodo.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createTodo.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(createTodo.rejected, (state) => {
      state.isLoading = false;
    });

    builder.addCase(getTodos.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getTodos.fulfilled, (state, action) => {
      state.todos = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getTodos.rejected, (state) => {
      state.isLoading = false;
    });

    builder.addCase(toggleDone.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(toggleDone.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(toggleDone.rejected, (state) => {
      state.isLoading = false;
    });

    builder.addCase(updateTodo.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateTodo.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(updateTodo.rejected, (state) => {
      state.isLoading = false;
    });
    
    builder.addCase(deleteTodo.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteTodo.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(deleteTodo.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default appSlice;

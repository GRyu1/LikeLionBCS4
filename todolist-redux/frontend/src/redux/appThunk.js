import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BACK_URL = "http://localhost:3010";

export const createTodo = createAsyncThunk(
  "appSlice/createTodo",
  async ({ title }) => {
    const response = await axios.post(
      `${BACK_URL}/todos`,
      { title },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.status;
  }
);

export const getTodos = createAsyncThunk("appSlice/getTodos", async () => {
  const response = await axios.get(`${BACK_URL}/todos`);

  return response.data.todos;
});

export const toggleDone = createAsyncThunk(
  "appSlice/toggleDone",
  async ({ todoId }) => {
    const response = await axios.put(`${BACK_URL}/todos/${todoId}/done`);

    return response.status;
  }
);

export const updateTodo = createAsyncThunk(
  "appSlice/updateTodo",
  async ({ todoId, title }) => {
    const response = await axios.put(
      `${BACK_URL}/todos/${todoId}`,
      {
        title,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.status;
  }
);

export const deleteTodo = createAsyncThunk(
  "appSlice/deleteTodo",
  async ({ todoId }) => {
    const response = await axios.delete(`${BACK_URL}/todos/${todoId}`);

    return response.status;
  }
);

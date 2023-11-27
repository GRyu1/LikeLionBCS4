import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//async functions.
export const getTodos = createAsyncThunk("appSlice/getTodos", async () => {
  const response = await axios.get("http://localhost:3010/todos");

  console.log(response);

  return response.data.todos;
});

export const createTodo = createAsyncThunk(
  "appSlice/createTodo",
  async ({ title }) => {
    const response = await axios.post(
      "http://localhost:3010/todos",
      {
        title,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data.todo;
  }
);

import { createAsyncThunk } from "@reduxjs/toolkit";

export const getData = createAsyncThunk("todos/getTodoAsync", async () => {
  const response = await fetch("http://localhost:7000/todos");
  if (response.ok) {
    const todos = await response.json();
    return { todos };
  }
});

export const addData = createAsyncThunk(
  "todos/addTodoAsync",
  async (payload) => {
    const response = await fetch("http://localhost:7000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: payload.title }),
    });
    if (response.ok) {
      const todos = await response.json();

      return { todos };
    }
  }
);

export const toggleCompleted = createAsyncThunk(
  "todos/completeTodoAsync",
  async (payload) => {
    const response = await fetch(`http://localhost:7000/todos/${payload.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ completed: payload.completed }),
    });
    // above working with api, the below is for state
    if (response.ok) {
      const todos = await response.json();

      return { id: todos.id, completed: todos.completed };
    }
  }
);

export const updateData = createAsyncThunk(
  "todos/updateTodoAsync",
  async (payload) => {
    const response = await fetch(`http://localhost:7000/todos/${payload.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: payload.title }),
    });
    console.log(payload.title);
    // above working with api, the below is for state
    if (response.ok) {
      const todos = await response.json();
      console.log("after", todos.title);
      return { id: todos.id, title: todos.title };
    }
  }
);

export const deleteData = createAsyncThunk(
  "todos/deleteTodoAsync",
  async (payload) => {
    const response = await fetch(`http://localhost:7000/todos/${payload.id}`, {
      method: "DELETE",
    });
    // above working with api, the below is for state
    if (response.ok) {
      return { id: payload.id };
    }
  }
);

//A slice gives us a way to store a piece, or slice, of data, and
// gives us all the things we need to change and retrieve that data.
import { createSlice } from "@reduxjs/toolkit";
import {
  getData,
  addData,
  toggleCompleted,
  deleteData,
  updateData,
} from "../service/JsonServiceClient";

export const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, () => {
        console.log("fetching data now");
      })
      .addCase(getData.fulfilled, (state, action) => {
        console.log("fetched data");

        return action.payload.todos;
      })
      .addCase(addData.fulfilled, (state, action) => {
        //update the state
        state.push(action.payload.todos);
      })
      .addCase(toggleCompleted.fulfilled, (state, action) => {
        //update the state
        const index = state.findIndex((todo) => todo.id === action.payload.id);
        state[index].completed = action.payload.completed;
      })
      .addCase(updateData.fulfilled, (state, action) => {
        //update the state
        const index = state.findIndex((todo) => todo.id === action.payload.id);
        state[index].title = action.payload.title;
      })

      .addCase(deleteData.fulfilled, (state, action) => {
        return state.filter((todo) => todo.id !== action.payload.id);
      });
  },
});

export default todoSlice.reducer;

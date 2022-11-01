import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import toDoDate from "../../data/toDoDate";
import { ToDos } from "../../types/ToDoStructure";
import { ToDoState } from "./types";

const initialState: ToDoState = {
  list: toDoDate,
};

const toDoSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    loadToDos: (currentState, action: PayloadAction<ToDos>) => ({
      ...currentState,
      list: [...currentState.list, ...action.payload],
    }),
  },
});

export const { loadToDos: loadToDosActionCreator } = toDoSlice.actions;

export const toDoReducer = toDoSlice.reducer;

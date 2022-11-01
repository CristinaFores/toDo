import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import toDoDates from "../../data/toDoDate";
import { ToDos } from "../../types/ToDoStructure";
interface ToDoState {
  list: ToDos;
}
const initialState: ToDoState = {
  list: toDoDates,
};

const toDoSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    loadToDos: (currentState, action: PayloadAction<ToDos>): ToDoState => ({
      ...currentState,
      list: [...currentState.list, ...action.payload],
    }),
    removeToDo: (currentState, action: PayloadAction<number>): ToDoState => ({
      ...currentState,
      list: currentState.list.filter((todo) => todo.id !== action.payload),
    }),
    addToDo: (currentState, action: PayloadAction<ToDos>): ToDoState => ({
      ...currentState,
      list: [...currentState.list, ...action.payload],
    }),
  },
});

export const {
  loadToDos: loadToDosActionCreator,
  removeToDo: removeToDoActionCreator,
  addToDo: addToDoActionCreator,
} = toDoSlice.actions;

export const toDoReducer = toDoSlice.reducer;

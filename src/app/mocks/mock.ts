import { configureStore } from "@reduxjs/toolkit";
import { toDoReducer } from "../redux/slices/toDoSlice.ts";

export const StoreMock = () => {
  return configureStore({
    reducer: {
      toDos: toDoReducer,
    },
  });
};

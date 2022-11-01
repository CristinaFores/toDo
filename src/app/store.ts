import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { toDoReducer } from "./redux/slices/toDoSlice.ts";

export const store = configureStore({
  reducer: {
    toDos: toDoReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

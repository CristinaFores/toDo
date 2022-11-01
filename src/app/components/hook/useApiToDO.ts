import { useCallback } from "react";

import { useAppDispatch } from "../../hooks";
import {
  addToDoActionCreator,
  loadToDosActionCreator,
  removeToDoActionCreator,
} from "../../redux/slices/toDoSlice.ts";
import { ToDos, ToDoStructure } from "../../types/ToDoStructure";

const useApiToDo = () => {
  const dispatch = useAppDispatch();
  let url = process.env.RREACT_APP_API_URL_TODO_API;

  const loadAllTasks = useCallback(async () => {
    try {
      const response = await fetch(url!);
      const apiResponse: ToDos = await response.json();
      dispatch(loadToDosActionCreator(apiResponse));
    } catch (error: unknown) {
      throw new Error(`There was an error: ${(error as Error).message}`);
    }
  }, [dispatch, url]);

  const deleteTask = useCallback(
    async (todo: ToDoStructure) => {
      const response = await fetch(`${url}/${todo.id}`, {
        method: "DELETE",
        body: JSON.stringify(todo),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        dispatch(removeToDoActionCreator(todo.id));
      }
    },
    [dispatch, url]
  );

  const addTask = useCallback(
    async (todo: ToDoStructure) => {
      const response = await fetch(url!, {
        method: "POST",
        body: JSON.stringify(todo),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        dispatch(addToDoActionCreator([todo]));
      }
    },
    [dispatch, url]
  );

  return { loadAllTasks, deleteTask, addTask };
};

export default useApiToDo;

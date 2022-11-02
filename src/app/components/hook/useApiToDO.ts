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
  let url = process.env.REACT_APP_API_URL_TODO_API;

  const loadAllTasks = useCallback(async () => {
    const response = await fetch(url!);
    const apiResponse: ToDos = await response.json();
    dispatch(loadToDosActionCreator(apiResponse));
  }, [dispatch, url]);

  const deleteTask = useCallback(
    async (idTask: number) => {
      const response = await fetch(`${url}/${idTask}`, {
        method: "DELETE",
      });

      if (response.ok) {
        dispatch(removeToDoActionCreator(idTask));
      }
    },
    [dispatch, url]
  );

  const addTask = useCallback(
    async (toDoDates: ToDoStructure) => {
      const response = await fetch(url!, {
        method: "POST",
        body: JSON.stringify(toDoDates),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        dispatch(addToDoActionCreator([toDoDates]));
      }
    },
    [dispatch, url]
  );

  return { loadAllTasks, deleteTask, addTask };
};

export default useApiToDo;

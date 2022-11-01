import toDoDates from "../../data/toDoDate";
import {
  loadToDosActionCreator,
  removeToDoCreator,
  toDoReducer,
} from "./toDoSlice.ts";

describe("Given the toDoSlice function loadToDos", () => {
  describe("When it receives a 'loadToDos' action with a list of 3 tasks", () => {
    test("Then should return a new state with a copy of the list of 3 tasks received", () => {
      const loadToDoTaskListAction = loadToDosActionCreator(toDoDates);

      const initialState = {
        list: [],
      };
      const expectedToDoState = {
        list: toDoDates,
      };

      const newToDoState = toDoReducer(initialState, loadToDoTaskListAction);

      expect(newToDoState).toEqual(expectedToDoState);
    });
  });

  describe("Given the toDoSlice function removeToDos", () => {
    describe("When it receives a 'deleteTask' action with an id 2", () => {
      test("Then should return a new state of tasks 2", () => {
        const idToDelete = 2;

        const initialState = {
          list: [
            {
              id: 1,
              name: "Cenar",
              done: false,
            },
            {
              id: 2,
              name: "Dormir",
              done: false,
            },
            {
              id: 3,
              name: " Tengo que acabar el challenge",
              done: false,
            },
          ],
        };

        const expectedToDoState = {
          list: toDoDates.filter((todo) => todo.id !== idToDelete),
        };

        const newToDoState = toDoReducer(
          initialState,
          removeToDoCreator(idToDelete)
        );

        expect(newToDoState).toEqual(expectedToDoState);
      });
    });
  });
});

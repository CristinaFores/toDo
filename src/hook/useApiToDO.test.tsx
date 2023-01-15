import { renderHook } from "@testing-library/react";
import { Provider } from "react-redux";
import { useAppDispatch } from "../redux/hooks";
import { store } from "../redux/store";

import useApiToDo from "./useApiToDO";

jest.mock("../../hooks", () => {
  const mockDispatch = jest.fn();
  return {
    useAppDispatch: () => mockDispatch,
  };
});

// const dispatchSpy = jest.spyOn(store, "dispatch");

interface ProviderWrapperProps {
  children: JSX.Element | JSX.Element[];
}
const ProviderWrapper = ({ children }: ProviderWrapperProps) => {
  return <Provider store={store}>{children}</Provider>;
};
describe("Given the useApiToDo custom hook", () => {
  describe("when its method loadAllTasks is invoked", () => {
    test("Then its should  call the dispatch", async () => {
      const {
        result: {
          current: { loadAllTasks },
        },
      } = renderHook(() => useApiToDo(), {
        wrapper: ProviderWrapper,
      });

      const dispatch = useAppDispatch();
      await loadAllTasks();

      expect(dispatch).toHaveBeenCalledTimes(1);
    });
  });
});

describe("when its method deleteTask is invoked", () => {
  test("Then its should  call the dispatch", async () => {
    const {
      result: {
        current: { deleteTask },
      },
    } = renderHook(() => useApiToDo(), {
      wrapper: ProviderWrapper,
    });

    const dispatch = useAppDispatch();
    await deleteTask(1);

    expect(dispatch).toHaveBeenCalledTimes(1);
  });
});

describe("when its method addTask is invoked", () => {
  test("Then its should  call the dispatch", async () => {
    const {
      result: {
        current: { addTask },
      },
    } = renderHook(() => useApiToDo(), {
      wrapper: ProviderWrapper,
    });
    const newTask = {
      id: 1,
      name: "Cenar",
      done: false,
    };
    const dispatch = useAppDispatch();
    await addTask(newTask);

    expect(dispatch).toHaveBeenCalledTimes(1);
  });
});

import { renderHook } from "@testing-library/react";
import { Provider } from "react-redux";
import { useAppDispatch } from "../../hooks";
import { store } from "../../store";
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

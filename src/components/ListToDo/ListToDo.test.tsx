import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { StoreMock } from "../../mocks/mock";

import ListToDo from "./ListToDo";

describe("Given a ToDoList component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading  'TASK' and one text 'YOU HAVE 1 PENDING TASK'", () => {
      const expectedHeading = {
        name: "TASK",
      };

      render(
        <Provider store={StoreMock()}>
          <ListToDo />
        </Provider>
      );

      const heading = screen.queryByRole("heading", expectedHeading);

      expect(heading).toBeInTheDocument();
    });
  });
});

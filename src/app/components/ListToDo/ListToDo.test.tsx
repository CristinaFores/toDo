import { render, screen } from "@testing-library/react";
import ListToDo from "./ListToDo";

describe("Given a ToDoList component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading  'TASK' and one text 'YOU HAVE 1 PENDING TASK'", () => {
      const expectedHeading = {
        name: "TASK",
      };
      const expectedNumberTask = 1;

      render(<ListToDo />);

      const heading = screen.queryByRole("heading", expectedHeading);
      const spanText = screen.queryByText(
        `YOU HAVE ${expectedNumberTask} PENDING TASK`
      );
      expect(heading).toBeInTheDocument();
      expect(spanText).toBeInTheDocument();
    });
  });
});

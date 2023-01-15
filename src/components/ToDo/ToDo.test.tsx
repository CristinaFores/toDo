import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { StoreMock } from "../../mocks/mock";

import ToDo from "./ToDo";

describe("Given a ToDo component", () => {
  describe("When it is rendered  at it receives the component ToDo", () => {
    test("Then it should rendera one list, with text, with two buttons", () => {
      const task = {
        id: 0,
        name: "Task",
        done: true,
      };

      render(
        <Provider store={StoreMock()}>
          <ToDo toDo={task} />
        </Provider>
      );
      const list = screen.getByRole("list");
      const text = screen.getByRole("listitem");
      const buttonDelete = screen.getByRole("button", {
        name: "DELETE",
      });
      const buttonModify = screen.getByRole("button", {
        name: "MODIFY",
      });

      expect(list).toBeInTheDocument();
      expect(text).toBeInTheDocument();
      expect(buttonDelete).toBeInTheDocument();
      expect(buttonModify).toBeInTheDocument();
    });
  });
});

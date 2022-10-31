import { ToDoStructure } from "../../types/ToDoStructure";
import {
  ToDoButtonStyledDelete,
  ToDoButtonStyledModify,
  ToDoStyled,
} from "./ToDoStyled";

interface ToDoProps {
  toDo: ToDoStructure;
}

const ToDo = ({ toDo: { id, name, done } }: ToDoProps): JSX.Element => {
  return (
    <ToDoStyled>
      <ul>
        <li key={id}>
          <p>
            TASK 1{name} {done}
          </p>
        </li>
      </ul>
      <ToDoButtonStyledDelete>DELETE</ToDoButtonStyledDelete>
      <ToDoButtonStyledModify>MODIFY</ToDoButtonStyledModify>
    </ToDoStyled>
  );
};

export default ToDo;

import { ToDoStructure } from "../../types/ToDoStructure";
import {
  ToDoButtonStyled,
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
          <p>{`${name}`}</p>
          <input type="checkbox" name="" id="" checked={done} />
        </li>
      </ul>
      <ToDoButtonStyled>
        <ToDoButtonStyledDelete>DELETE</ToDoButtonStyledDelete>
        <ToDoButtonStyledModify>MODIFY</ToDoButtonStyledModify>
      </ToDoButtonStyled>
    </ToDoStyled>
  );
};

export default ToDo;

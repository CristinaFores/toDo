import useApiToDo from "../../hook/useApiToDO";
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
  const { deleteTask } = useApiToDo();

  return (
    <ToDoStyled>
      <ul>
        <li key={id}>
          <p>{`${name}`}</p>
        </li>
      </ul>
      <ToDoButtonStyled>
        <ToDoButtonStyledDelete autoFocus onClick={() => deleteTask(id)}>
          DELETE
        </ToDoButtonStyledDelete>
        <ToDoButtonStyledModify autoFocus>MODIFY</ToDoButtonStyledModify>
      </ToDoButtonStyled>
    </ToDoStyled>
  );
};

export default ToDo;

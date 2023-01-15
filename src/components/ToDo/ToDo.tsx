import useApiToDo from "../../hook/useApiToDO";
import { ToDoStructure } from "../../types/ToDoStructure";
import {
  ToDoButtonStyled,
  ToDoButtonStyledDelete,
  ToDoStyled,
} from "./ToDoStyled";

interface ToDoProps {
  toDo: ToDoStructure;
}

const ToDo = ({ toDo: { id, name, done } }: ToDoProps): JSX.Element => {
  const { deleteTask } = useApiToDo();

  return (
    <ToDoStyled>
      <input type="checkbox" />

      <p>{`${name}`}</p>

      <ToDoButtonStyled>
        <ToDoButtonStyledDelete autoFocus onClick={() => deleteTask(id)}>
          DELETE
        </ToDoButtonStyledDelete>
      </ToDoButtonStyled>
    </ToDoStyled>
  );
};

export default ToDo;

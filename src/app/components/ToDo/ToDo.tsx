import { useAppDispatch } from "../../hooks";
import { removeToDoCreator } from "../../redux/slices/toDoSlice.ts";
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
  const dispatch = useAppDispatch();

  const handleRemove = (id: number) => {
    dispatch(removeToDoCreator(id));
  };

  return (
    <ToDoStyled>
      <ul>
        <li key={id}>
          <p>{`${name}`}</p>
        </li>
      </ul>
      <ToDoButtonStyled>
        <ToDoButtonStyledDelete onClick={() => handleRemove(id)}>
          DELETE
        </ToDoButtonStyledDelete>
        <ToDoButtonStyledModify>MODIFY</ToDoButtonStyledModify>
      </ToDoButtonStyled>
    </ToDoStyled>
  );
};

export default ToDo;

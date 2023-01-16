import { useAppSelector } from "../../redux/hooks";
import ToDo from "../ToDo/ToDo";
import {
  ContainStyled,
  FormStyled,
  ListToDoStyled,
  ToDoButtonStyledRemove,
  ToDoListInputStyled,
} from "./ListToDoStyled";
import { useState } from "react";
import useApiToDo from "../../hook/useApiToDO";
import { ToDoStructure } from "../../types/ToDoStructure";

const ListToDo = (): JSX.Element => {
  const { addTask } = useApiToDo();
  const { list } = useAppSelector((state) => state.toDos);
  const [task, setTask] = useState("");
  const numberTask: number = list.length;

  const idAdd: ToDoStructure = {
    id: list.length + 1,
    name: task,
    done: false,
  };

  const handle = (event: React.SyntheticEvent) => {
    event.preventDefault();
    addTask(idAdd);
    setTask("");
  };

  return (
    <>
      <ContainStyled>
        <FormStyled className="task-input" onSubmit={handle}>
          <ToDoButtonStyledRemove type="submit">
            Add Task
          </ToDoButtonStyledRemove>
          <ToDoListInputStyled
            autoComplete="off"
            autoFocus
            type="text"
            required
            placeholder="Write a new task to add"
            onChange={(event) => setTask(event.target.value)}
            value={task}
          />
          <span aria-label="Number task pending">
            Pending Task ({numberTask})
          </span>
        </FormStyled>
      </ContainStyled>
      <ListToDoStyled>
        <ul>
          {list.map((task, index) => (
            <ToDo toDo={task} key={index} />
          ))}
        </ul>
      </ListToDoStyled>
    </>
  );
};

export default ListToDo;

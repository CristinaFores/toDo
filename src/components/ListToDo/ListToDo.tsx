import { useAppSelector } from "../../redux/hooks";
import ToDo from "../ToDo/ToDo";
import {
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
  const taskList = useAppSelector((state) => state.toDos.list);
  const [task, setTask] = useState("");
  const numberTask: number = taskList.length;

  const idAdd: ToDoStructure = {
    id: taskList.length + 1,
    name: task,
    done: false,
  };

  const handle = (event: React.SyntheticEvent) => {
    event.preventDefault();
    addTask(idAdd);
    setTask("");
  };

  return (
    <ListToDoStyled>
      <h2>TASK</h2>
      <ul></ul>
      <ul>
        {taskList.map((task) => (
          <ToDo toDo={task} />
        ))}
      </ul>
      <FormStyled className="task-input" onSubmit={handle}>
        <ToDoButtonStyledRemove type="submit">ADD TASK</ToDoButtonStyledRemove>
        <ToDoListInputStyled
          autoComplete="off"
          autoFocus
          type="text"
          required
          placeholder="Add new task"
          onChange={(event) => setTask(event.target.value)}
          value={task}
        />
      </FormStyled>

      <span aria-label="Number task pending">
        YOU HAVE {numberTask} PENDING TASK
      </span>
    </ListToDoStyled>
  );
};

export default ListToDo;

import { useAppSelector } from "../../hooks";
import ToDo from "../ToDo/ToDo";
import { ListToDoStyled } from "./ListToDoStyled";

const ListToDo = (): JSX.Element => {
  const taskList = useAppSelector((state) => state.toDos.list);
  const numberTask: number = 3;
  return (
    <ListToDoStyled>
      <h2>TASK</h2>
      <ul>
        {taskList.map((task) => (
          <ToDo toDo={task} />
        ))}
      </ul>

      <span aria-label="Number task pending">
        YOU HAVE {numberTask} PENDING TASK
      </span>
    </ListToDoStyled>
  );
};

export default ListToDo;

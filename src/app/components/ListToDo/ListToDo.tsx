import ToDo from "../ToDo/ToDo";
import { ListToDoStyled } from "./ListToDoStyled";

const ListToDo = (): JSX.Element => {
  const numberTask: number = 1;
  return (
    <ListToDoStyled>
      <h2>TASK</h2>
      <ToDo toDo={{ id: 1, name: "CENAR ", done: true }} />

      <span>YOU HAVE {numberTask} PENDING TASK</span>
    </ListToDoStyled>
  );
};

export default ListToDo;

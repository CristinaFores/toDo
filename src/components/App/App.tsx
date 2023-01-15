import ListToDo from "../ListToDo/ListToDo";

import Header from "../Header/Header";
import useApiToDo from "../../hook/useApiToDO";
import { useAppDispatch } from "../../redux/hooks";
import { useEffect } from "react";

const App = (): JSX.Element => {
  const { loadAllTasks } = useApiToDo();
  const dispatch = useAppDispatch();

  useEffect(() => {
    loadAllTasks();
  }, [loadAllTasks, dispatch]);

  return (
    <div>
      <Header />
      <ListToDo />
    </div>
  );
};

export default App;

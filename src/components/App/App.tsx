import { useEffect } from "react";

import ListToDo from "../ListToDo/ListToDo";
import { useAppDispatch } from "../../redux/hooks";
import useApiToDo from "../../hook/useApiToDO";

const App = (): JSX.Element => {
  const { loadAllTasks } = useApiToDo();
  const dispatch = useAppDispatch();

  useEffect(() => {
    loadAllTasks();
  }, [loadAllTasks, dispatch]);

  return (
    <div className="app">
      <ListToDo />
    </div>
  );
};

export default App;

import { useEffect } from "react";
import useApiToDo from "./app/components/hook/useApiToDO";
import ListToDo from "./app/components/ListToDo/ListToDo";
import { useAppDispatch } from "./app/hooks";

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

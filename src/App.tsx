import ToDo from "./app/components/ToDo/ToDo";

const App = (): JSX.Element => {
  return (
    <div className="app">
      <ToDo toDo={{ id: 1, name: "", done: true }} />
    </div>
  );
};

export default App;

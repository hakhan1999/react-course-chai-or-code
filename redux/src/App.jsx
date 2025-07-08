import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

const App = () => {
  return (
    <div className="w-[50%] mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <AddTodo />
      <Todos />
    </div>
  );
};

export default App;

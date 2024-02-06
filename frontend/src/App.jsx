import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import TotalCompleteItems from "./components/TotalCompleteItems";

function App() {
  return (
    <div className="max-w-[600px] m-auto p-4">
      <h1 className="text-5xl text-center mb-20">My Daily Todo List</h1>
      <AddTodoForm />
      <TodoList />
      <TotalCompleteItems />
    </div>
  );
}

export default App;

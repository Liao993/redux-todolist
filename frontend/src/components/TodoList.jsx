import TodoItem from "./TodoItem";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getData } from "../service/JsonServiceClient";

const TodoList = () => {
  const dispatch = useDispatch();
  //get data from state
  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
    <ul className="ml-5">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
        />
      ))}
    </ul>
  );
};

export default TodoList;

import { useState } from "react";
import { useDispatch } from "react-redux";
//import { addTodo } from "../redux/todoSlice";
import { addData } from "../service/JsonServiceClient";

const AddTodoForm = () => {
  const [task, setTask] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(addData({ title: task }));
    setTask("");
  };

  return (
    <form onSubmit={onSubmit} className=" my-10 form-inline ">
      <div className="flex flex-row justify-center">
        <input
          type="text"
          className="text-center font-bold text-lg text-white border-2 bg-gray-500"
          placeholder="Add todo task"
          value={task}
          onChange={(event) => setTask(event.target.value)}
        ></input>

        <button type="submit" className="btn bg-primary text-black ml-5">
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddTodoForm;

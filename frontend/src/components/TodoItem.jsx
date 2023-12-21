import { useDispatch } from "react-redux";
import {
  toggleCompleted,
  deleteData,
  updateData,
} from "../service/JsonServiceClient";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);

  const handleCompleteClick = () => {
    dispatch(toggleCompleted({ id: id, completed: !completed }));
  };

  const handleDeleteClick = () => {
    dispatch(deleteData({ id: id }));
  };

  const handleEditClick = (e) => {
    e.preventDefault();
    if (isEditing) {
      dispatch(updateData({ id: id, title: editedTitle }));
    }
    setIsEditing(!isEditing);
  };

  const handleTitleChange = (e) => {
    setEditedTitle(e.target.value);
  };

  return (
    <li
      className={`list-group-item mb-4 ${
        completed && "list-group-item-success"
      }`}
    >
      <div className="flex flew-row">
        <span className="flex items-center">
          <input
            type="checkbox"
            className="mr-3 w-4 h-4"
            checked={completed}
            onChange={handleCompleteClick}
          ></input>
          {isEditing ? (
            <input
              type="text"
              value={editedTitle}
              className="w-64 border-2 text-lg"
              onChange={handleTitleChange}
              onBlur={handleEditClick}
            />
          ) : (
            <div className="w-64 text-lg font-bold">{title}</div>
          )}
        </span>
        <button
          className="inline-block cursor-pointer rounded-md bg-orange-500 ml-10 px-4 py-3 text-center text-sm font-semibold uppercase text-white "
          onClick={handleDeleteClick}
        >
          Delete
        </button>
        <button
          className="inline-block cursor-pointer rounded-md bg-orange-500 ml-10 px-4 py-3 text-center text-sm font-semibold uppercase text-white "
          onClick={handleEditClick}
        >
          {isEditing ? "Save" : "Edit"}
        </button>
      </div>
    </li>
  );
};

export default TodoItem;

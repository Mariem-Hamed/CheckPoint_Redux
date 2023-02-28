import React from "react";
import { useSelector } from "react-redux";
import Task from "./Task";

const TaskList = () => {
  const { Tasks } = useSelector((state) => state.todoReducer);
  return (
    <ul className="List-group mt-3">
      {todos.map((todo) => (
        <Task todo={todo} key={todo.id} />
      ))}
    </ul>
  );
};

export default TaskList;

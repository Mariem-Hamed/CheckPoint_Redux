import React from "react";
import { useSelector } from "react-redux";
import Task from "./Task";

const TaskList = () => {
  const { todos, filteredTodos } = useSelector((state) => state.taskReducer);
  if (filteredTodos.length > 0)
    return (
      <ul className="list-group mt-3">
        {filteredTodos.map((todo) => (
          <Task todo={todo} key={todo.id} />
        ))}
      </ul>
    );

  return (
    <ul className="list-group mt-3">
      {todos.map((todo) => (
        <Task todo={todo} key={todo.id} />
      ))}
    </ul>
  );
};
export default TaskList;

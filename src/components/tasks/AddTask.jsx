import { React, useState } from "react";
import { addTask } from "../../redux/actions/taskActions";
import { useDispatch } from "react-redux";

const addTask = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const onAddClicked = () => {
    if (text) {
      const newTask = { id: Date.now(), decription: text, isDone: false };
      dispatch(addTask(newTask));
      setText("");
    }
  };
  const onFilter = dispatch(filterTask);
  return (
    <div>
      <div className="input-group mb-2">
        <input
          type="text"
          className="form-control"
          value="text"
          onChange={(e) => setText(e.target.value)}
        />
        <button className="btn btn-primary" onClick={onAddClicked}>
          Add
        </button>
      </div>
      <div className="d-flex">
        <div>
          <input
            type="radio"
            name="task"
            value="all"
            id="all"
            onClick={onFilter}
          />
          <label className="form-label" htmlFor="all">
            All
          </label>
        </div>
        <div>
          <input type="radio" name="task" value="completed" id="completed" />
          <label className="form-label" htmlFor="completed">
            Completed
          </label>
        </div>
        <div>
          <input
            type="radio"
            name="task"
            value="uncompleted"
            id="uncompleted"
          />
          <label className="form-label" htmlFor="uncompleted">
            Uncompleted
          </label>
        </div>
      </div>
    </div>
  );
};

export default addTask;

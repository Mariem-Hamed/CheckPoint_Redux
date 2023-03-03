import { useDispatch } from "react-redux";
import {
  setCurrentTask,
  toggleCompletedTask,
} from "../../redux/actions/taskActions";
const Task = ({ todo }) => {
  const { id, description } = todo;
  const dispatch = useDispatch();
  const onClick = (e) => {
    if (e.target.id === "edit") {
      dispatch(setCurrentTask(todo));
    }
    if (e.target.id === "completed") {
      dispatch(toggleCompletedTask(id));
    }
  };

  return (
    <li>
      <div className={"completed"}>{description}</div>
      <div className="btn-group" role="group">
        <i
          id="completed"
          className="fa fa-cheek text-secondary"
          onClick={onClick}
        ></i>
        <i
          id="edit"
          className="fas fa-open text-dark"
          data-bs-toggle="modal"
          data-bs-target="#editTask"
          onClick={onClick}
        ></i>
      </div>
    </li>
  );
};

export default Task;

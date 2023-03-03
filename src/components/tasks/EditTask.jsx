import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { updateTask } from "../../redux/actions/taskActions";
import { useDispatch } from "react-redux";

const EditTask = () => {
  const { current } = useSelector((state) => state.taskReducer);

  const dispatch = useDispatch();
  const [text, setText] = useState();
  const onSave = () =>
    dispatch(updateTask({ id: current.id, description: text }));
  useEffect(() => {
    if (current !== null) {
      setText(current.descrption);
    }
  }, [current]);

  return (
    <div
      className="modal fade"
      id="editTask"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog"></div>
      <div className="modal-content"></div>
      <div className="modal header"> </div>
      <h5 className="modal-tittle" id="exampleModalLabel">
        Edit Task
      </h5>
      <div className="modal-body">
        <input
          type="text"
          value={Text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="modal-footer"></div>

      <button type="button" className="btn btn-secondary"></button>
    </div>
  );
};
export default EditTask;

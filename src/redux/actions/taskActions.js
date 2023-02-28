import {
  ADD_TASK,
  DELETE_TASK,
  SET_CURRENT_TASK,
  TOGGLE_COMPLETED_TASK,
  UPDATE_TASK,
  FILTER_TASKS,
} from "./types";

//add

export const addTask = (payload) => {
  return { type: ADD_TASK, payload };
};

//update
export const updateTask = (payload) => {
  return { type: UPDATE_TASK, payload };
};

//delete
export const deleteTask = (id) => {
  return { type: DELETE_TASK, payload: id };
};

//current
export const setCurrentTask = (payload) => {
  return { type: SET_CURRENT_TASK, payload };
};

//filter

export const filterTasks = (payload) => {
  return { type: FILTER_TASKS, payload };
};

//toggle
export const toggleCompletedTask = (payload) => {
  return { type: TOGGLE_COMPLETED_TASK, payload };
};

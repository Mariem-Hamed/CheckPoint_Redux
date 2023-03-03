import { ADD_TASK } from "../actions/types";
import { SET_CURRENT_TASK } from "../actions/types";
import { UPDATE_TASK } from "../actions/types";
import { TOGGLE_COMPLETED_TASK } from "../actions/types";

const initialState = {
  todos: [],
  current: null,
  filteredTodos: [],
};

const taskReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TASK:
      return {
        ...state,
        todos: [...state.todos, payload],
      };

    case SET_CURRENT_TASK:
      return {
        ...state,
        current: payload,
      };

    case UPDATE_TASK:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === payload.id
            ? { ...todo, description: payload.decription }
            : todo
        ),
      };
    case TOGGLE_COMPLETED_TASK:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === payload ? { ...todo, isDone: !todo.isDone } : todo
        ),
      };

    default:
      return state;
  }
};
export default taskReducer;

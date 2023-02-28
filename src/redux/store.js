import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";

import rootReducers from "./reducers/rootReducers";
const midddleWare = [thunk];
export const store = createStore(
  rootreducers,
  composeWithDevTools(applyMiddleware(...missleware))
);

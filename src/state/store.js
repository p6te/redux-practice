import { createStore } from "redux";
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";
import reducers  from "./reducers/index.js";

export const store = createStore(reducers, {}, applyMiddleware(thunk));



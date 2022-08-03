import { createStore } from "react-redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducers } from "./reducers/index";

const store = createStore(reducers, {}, applyMiddleware(thunk));

export default store;

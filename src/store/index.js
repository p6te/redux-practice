import { createStore } from "redux";

const reducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case "PLUS":
      return { counter: state.counter + 1 };

    case "MINUS":
      return { counter: state.counter - 1 };

    case "INPUT":
      return { counter: state.counter + action.payload };

    default:
      return state;
  }
};

export const store = createStore(reducer);

import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "./store/features/counter/counterSlice";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");

  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  const handleInputCounter = () => {
    const inputNumber = parseInt(inputValue);
    dispatch(incrementByAmount(inputNumber));
    setInputValue("");
  };

  return (
    <div className="App">
      <button onClick={() => dispatch(increment())}>+ 1</button>
      <h1>{count}</h1>
      <button onClick={() => dispatch(decrement())}>- 1</button>
      <br />
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={() => handleInputCounter()}>add input value</button>
    </div>
  );
}

export default App;

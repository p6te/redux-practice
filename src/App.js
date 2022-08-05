import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");

  const counter = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  const minus = () => {
    dispatch({
      type: "MINUS",
    });
  };
  const plus = () => {
    dispatch({
      type: "PLUS",
    });
  };

  const handleInput = () => {
    const inputNumber = parseInt(inputValue);
    dispatch({
      type: "INPUT",
      payload: inputNumber,
    });
    setInputValue("");
  };
  return (
    <div className="App">
      <button onClick={() => plus()}>+ 1</button>
      <h1>{counter}</h1>
      <button onClick={() => minus()}>- 1</button>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={() => handleInput()}>add input value</button>
    </div>
  );
}

export default App;

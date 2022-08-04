import "./App.css";
import { useSelector, useDispatch } from "react-redux";

function App() {
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
  return (
    <div className="App">
      <button onClick={() => plus()}>+ 1</button>
      <h1>{counter}</h1>
      <button onClick={() => minus()}>- 1</button>
    </div>
  );
}

export default App;

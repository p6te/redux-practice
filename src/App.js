import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";

function App() {
  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();

  const { depositMoney, withdrawMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );

  return (
    <div className="App">
      <button onClick={() => depositMoney(1000)}>deposit</button>
      <h1>{account}</h1>
      <button onClick={() => withdrawMoney(2000)}>withdraw</button>
    </div>
  );
}

export default App;

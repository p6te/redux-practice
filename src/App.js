import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";

function App() {


  return (
    <div className="App">
      <button >deposit</button>
      <h1>{account}</h1>
      <button >withdraw</button>
    </div>
  );
}

export default App;

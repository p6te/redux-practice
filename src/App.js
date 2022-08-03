import "./App.css";
import { useSelector } from "react-redux";
const account = useSelector((state) => state.account);

function App() {
  console.log(account);
  return (
    <div className="App">
      <h1>{account}</h1>
    </div>
  );
}

export default App;

import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  console.log(isLoggedIn);

  return <div className="App">{isLoggedIn ? <Layout /> : <Auth />}</div>;
}

export default App;

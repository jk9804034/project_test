import React from "react";
import { Route } from 'react-router-dom';
import Menu from "./page/menu/Menu";
import Counter from "./page/sample/Counter";
import InputSample from "./page/sample/InputSample";
import CreateUserContainer from "./container/CreateUserContainer";
import Hooks from "./page/sample/hooks/Hooks";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Menu />
      <Route path="/" exact={true} component={Counter} />
      <Route path="/counter" component={Counter} />
      <Route path="/input" component={InputSample} />
      <Route path="/user" component={CreateUserContainer} />
      <Route path="/hooks" component={Hooks} />
    </div>
  );
}

export default App;

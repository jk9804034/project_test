import React from "react";
import { Route } from 'react-router-dom';
import Menu from "./page/menu/Menu";
import Counter from "./page/sample/Counter";
import InputSample from "./page/sample/InputSample";
import CreateUserContainer from "./container/CreateUserContainer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Menu />
      <Route path="/" exact={true} component={Counter} />
      <Route path="/counter" component={Counter} />
      <Route path="/input" component={InputSample} />
      <Route path="/user" component={CreateUserContainer} />
    </div>
  );
}

export default App;

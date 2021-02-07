import React from "react";
import { Route } from 'react-router-dom';
import Menu from "./page/menu/Menu";
import Counter from "./page/sample/Counter";
import InputSample from "./page/sample/InputSample";
import CreateUserContainer from "./container/CreateUserContainer";
import Hooks from "./page/sample/hooks/Hooks";
import Immer from "./page/sample/immer/Immer";
import CssScss from "./page/sample/cssScss/CssScss";
import StyledCss from "./page/sample/styledCss/StyledCss";
import TodoTemplate from "./page/sample/todoList/TodoTemplate";
import AxiosGet from "./page/sample/axiosGet/AxiosGet";

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
      <Route path="/immer" component={Immer} />
      <Route path="/scss" component={CssScss} />
      <Route path="/styled" component={StyledCss} />
      <Route path="/todo" component={TodoTemplate} />
      <Route path="/axios" component={AxiosGet} />
    </div>
  );
}

export default App;

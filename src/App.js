import React from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import Menu from "./page/menu/Menu";
import Counter from "./page/sample/counter/Counter";
import InputSample from "./page/sample/input/InputSample";
import CreateContainer from "./page/sample/inputCheck/CreateContainer";
import Hooks from "./page/sample/hooks/Hooks";
import Immer from "./page/sample/immer/Immer";
import CssScss from "./page/sample/cssScss/CssScss";
import StyledCss from "./page/sample/styledCss/StyledCss";
import TodoTemplate from "./page/sample/todoList/TodoTemplate";
import AxiosGet from "./page/sample/axiosGet/AxiosGet";
import AxiosGetContext from "./page/sample/axiosGet/AxiosGetContext";
import ReduxContent from "./page/sample/redux/ReduxContent";
import ReduxMiddleware from "./page/sample/reduxMiddleware/ReduxMiddleware";
import TodoContainer from "./page/example/todos/TodoContainer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Menu />

      <Switch>
        <Route path="/" exact={true} component={Counter} />
        <Route path="/counter" component={Counter} />
        <Route path="/input" component={InputSample} />
        <Route path="/user" component={CreateContainer} />
        <Route path="/hooks" component={Hooks} />
        <Route path="/immer" component={Immer} />
        <Route path="/scss" component={CssScss} />
        <Route path="/styled" component={StyledCss} />
        <Route path="/todo" component={TodoTemplate} />
        <Route path="/axios" component={AxiosGet} />
        <Route path="/axios_context" component={AxiosGetContext} />
        <Route path="/redux" component={ReduxContent} />
        <Route path="/middleware" component={ReduxMiddleware} />
        <Route path="/exp_todo" component={TodoContainer} />
        <Redirect path="*" to="/" />
      </Switch>
    </div>
  );
}

export default App;

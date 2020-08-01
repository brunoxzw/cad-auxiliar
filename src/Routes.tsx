import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./components/login";
import Register from "./components/Register";
import Successful from "./components/Successful";
import Recovery from "./components/Recovery";
import Home from "./components/Home"
import Add from "./components/Add"

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/success" component={Successful} />
        <Route path="/recovery" component={Recovery} />
        <Route path="/home" component={Home} />
        <Route path="/add" component={Add}/>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

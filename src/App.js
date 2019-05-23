import React, { Component } from "react";
import Calculator from "./Components/calculator";
import Login from "./Components/login";
import Register from "./Components/register";
import Addtodo from "./Components/todo/addtodo";

import List from "./Components/todo/display";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Register} />
          <Route exact path="/calculator" component={Calculator} />
          <Route exact path="/add" component={Addtodo} />
          <Route exact path="/todo" component={List} />
        </div>
      </Router>
    );
  }
}

export default App;

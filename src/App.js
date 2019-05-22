import React, { Component } from "react";
import Calculator from "./Components/calculator";
import Login from "./Components/login";
import Register from "./Components/register";
import Home from "./Components/home";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/calculator" component={Calculator} />
        </div>
      </Router>
    );
  }
}

export default App;

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <Navbar />
       <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Signup" component={SignUp} />
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;

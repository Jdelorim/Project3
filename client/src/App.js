import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import UserInventory from "./components/UserInventory";
import Mannequin from "./components/Mannequin"
import classicTee from "./components/images/classicTee.png"
import "./App.css";

class App extends Component {

//component did mount - store that in state - necessary for database
//handleclick - pass that to mannequin

  state = {
  clothing: {shirts: [""]},
  user: "carter",
  selectedClothing: "",
  clothingIcon: ""  
  }

handleEvent = (icon) => {
  // alert ("alert")
  this.setState({clothingIcon: icon})
}

  render() {
    return (
      <Router>
      <div className="App">
      <Navbar />
       {/* <Switch> */}
          <Route exact path="/" component={Home} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Signup" component={SignUp} />
          
          <Route path="/UserInventory" render={(props) => (<UserInventory {...props} clothing={this.state.clothing} handleEvent={this.handleEvent} />)} /> 
          <Route path="/UserInventory" render={(props) => (<Mannequin {...props} clothingIcon={this.state.clothingIcon} />)} /> 

  
        {/* </Switch> */}
      </div>
      </Router>
    ); 
  }
}

export default App;

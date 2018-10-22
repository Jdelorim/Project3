import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import UserInventory from "./components/UserInventory";
import Mannequin from "./components/Mannequin"
import AddItem from "./components/AddItem"

import "./App.css";

class App extends Component {

//component did mount - store that in state - necessary for database
//handleclick - pass that to mannequin

  state = {
  clothing: {shirts: [""]},
  user: "carter",
  selectedClothing: "",
  hatIcon: "", 
  shirtIcon: "",
  pantsIcon: "",
  shoesIcon: ""
  }

handleHat = (icon) => {
  this.setState({hatIcon: icon})
}

handleShirt = (icon) => {
  // alert ("alert")
  // if (icon===)
  this.setState({shirtIcon: icon})

}

handlePants = (icon) => {
    this.setState({pantsIcon: icon})
}

handleShoes = (icon) => {
  this.setState({shoesIcon: icon})
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
          <Route exact path="/AddItem" component={AddItem} />

          
          <div className='flex-container'>
         
          <Route path="/UserInventory" render={(props) => (<UserInventory {...props} clothing={this.state.clothing} handleShirt={this.handleShirt} handlePants={this.handlePants} handleShoes={this.handleShoes} handleHat={this.handleHat}/>)} /> 
          <Route path="/UserInventory" render={(props) => (<Mannequin {...props} shirtIcon={this.state.shirtIcon} pantsIcon={this.state.pantsIcon} shoesIcon={this.state.shoesIcon} hatIcon={this.state.hatIcon} />)} /> 
         
          </div>


         
  
        {/* </Switch> */}
      </div>
      </Router>
    ); 
  }
}

export default App;

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

  hatValue: "",
  shirtValue: "",
  pantsValue: "",
  shoesValue: "",

  hatIcon: "", 
  shirtIcon: "",
  pantsIcon: "",
  shoesIcon: ""
  }

handleHat = (icon, value) => {
  this.setState({hatIcon: icon, hatValue: value})
}

handleShirt = (icon, value) => {
  // alert ("alert")
  // if (icon===)
  this.setState({shirtIcon: icon, shirtValue: value})

}

handlePants = (icon, value) => {
    this.setState({pantsIcon: icon, pantsValue: value})
}

handleShoes = (icon, value) => {
  this.setState({shoesIcon: icon, shoesValue: value})
}

saveOutfit = () => {
  const savedOutfit = [this.state.hatValue, this.state.shirtValue, this.state.pantsValue, this.state.shoesValue]
  alert("alert " + savedOutfit)
  // save as favorite outfit
  // append to a favorite outfit div
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
         
          <Route path="/UserInventory" render={(props) => (<UserInventory {...props} clothing={this.state.clothing} handleShirt={this.handleShirt} handlePants={this.handlePants} handleShoes={this.handleShoes} handleHat={this.handleHat} saveOutfit={this.saveOutfit}/>)} /> 
          <Route path="/UserInventory" render={(props) => (<Mannequin {...props} shirtIcon={this.state.shirtIcon} pantsIcon={this.state.pantsIcon} shoesIcon={this.state.shoesIcon} hatIcon={this.state.hatIcon} />)} /> 
         
          </div>


         
  
        {/* </Switch> */}
      </div>
      </Router>
    ); 
  }
}

export default App;

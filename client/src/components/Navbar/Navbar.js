import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {

   

    render(){
        return(
            <nav>
            <div className="nav-wrapper teal lighten-2">
            <div className="container">
              <a href="/" className="brand-logo center">Inventory</a>
              <ul id="nav-mobile" className="left hide-on-small-only ">
                <li><a href="/UserInventory">Inventory</a></li>
                <li><a href="/AddItem">Add Item</a></li>
                

                <li><a href="/Signup">Signup</a></li>
                <li><a href="/Login">Login</a></li>
                
                
              </ul>
              </div>
            </div>
          </nav>
        )
    }
}

export default Navbar;
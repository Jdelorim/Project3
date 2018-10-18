import React, { Component } from "react";
import "./UserInventory.css";
import { Button, Card, Row, Col, Icon, Dropdown, NavItem, Input } from 'react-materialize';
import classicTee from "../images/classicTee.png"
import hoodie from "../images/hoodie.png"
import poloMen from "../images/polo-men.png"



class UserInventory extends Component {

    //component did mount
    //user information - query databse to get shirt
    //state
     


    render(){

      

        // WIP - create the list of items and a button next to each. On click, pass the item to mannequin

        return(
            <div className="inventory-main">
                <div className="container">
                    <div className="inventory-wrapper">
                    <div className="inventory-header">
                        <h1 className="inventory-text">Your Inventory</h1>
                    </div>

                    <form className="inventory-form">

                         <div className="inventory-wrapper">
                        <div className="inventory-header">
                        <h1 className="inventory-text">Your Hats</h1>
                        </div>


                        <ul onClick ={ () => this.props.handleHat(classicTee)}>classic tee</ul>
                        <ul onClick ={ () => this.props.handleHat("")}>clear</ul>

                        </div> 
                        <br />


                       
                       <div className="inventory-wrapper">
                        <div className="inventory-header">
                        <h1 className="inventory-text">Your Shirts</h1>
                        </div>

                        <ul onClick ={ () => this.props.handleShirt(classicTee)}>classic tee</ul>
                        <ul onClick ={ () => this.props.handleShirt(hoodie)}>hoodie</ul>
                        <ul onClick ={ () => this.props.handleShirt(poloMen)}>polo</ul>
                        <ul onClick ={ () => this.props.handleShirt("")}>clear</ul>


                        </div>
                        <br />

                                     
                        <div className="inventory-wrapper">
                        <div className="inventory-header">
                        <h1 className="inventory-text">Your Pants</h1>
                        </div>
                        <ul onClick ={ () => this.props.handlePants(classicTee)}>classic tee</ul>
                        <ul onClick ={ () => this.props.handlePants(hoodie)}>hoodie</ul>
                        <ul onClick ={ () => this.props.handlePants("")}>clear</ul>

                        </div>
                        <br />

                        <div className="inventory-wrapper">
                        <div className="inventory-header">
                        <h1 className="inventory-text">Your Shoes</h1>
                        </div>
                        <ul onClick ={ () => this.props.handleShoes(classicTee)}>classic tee</ul>
                        <ul onClick ={ () => this.props.handleShoes("")}>clear</ul>

                        </div>
                        <br />
                        

                        {/* <ul>{this.props.user}</ul> */}
                        {/* //map over this.state.clothing */}
                        {/* set each onclick to id of clothinh */}


                    </form> 

                    </div>


                </div>
            
            </div>
        )
    }
}

export default UserInventory;
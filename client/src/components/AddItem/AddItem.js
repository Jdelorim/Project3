import React, { Component } from "react";
import "./AddItem.css";
import { Button, Card, Row, Col, Icon, Dropdown, NavItem, Input } from 'react-materialize';
import axios from "axios";

class AddItem extends Component {


    state= {
        itemName: "",
        itemImage: "",
        itemType: ""
    };

    handleInputChange = e => {
      
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();

        if(this.state.itemName === "" || this.state.itemImage === "" || this.state.itemType === "") {
            alert("please fill out all fields!");
        } else if (this.state.itemType != "pants" && this.state.itemType != "hat" && this.state.itemType != "shirt" && this.state.itemType != "shoes") {
            alert("please specify either 'shirt', 'pants', 'hat' or 'shoes'");

        } else {
        this.setState({
            itemName: this.state.itemName,
            itemImage: this.state.itemImage,
            itemType: this.state.itemType
        });
        console.log(`itemName ${this.state.itemName}`);
        console.log(`itemType ${this.state.itemType}`);
        }
        axios.post("api/addItem", {
            itemName: this.state.itemName,
            itemImage: this.state.itemImage,
            itemType: this.state.itemType
        }).then(response => {
            console.log("sent to front");
        });
    }

        



    render(){


        return(
       

            <div className="addItem-main">
                <div className="container">
                    <div className="addItem-wrapper">
                    <div className="addItem-header">
                        <h1 className="addItem-text">Add Item</h1>
                    </div>

                    <form className="addItem-form">
                        
                    <label htmlFor="itemName">Item Name </label>
                    <input
                        type="text"
                        name="itemName"
                        placeholder="name this item!"
                        value={this.state.itemName}
                        onChange={this.handleInputChange}
                    />

                    <label htmlFor="itemImage">Item Image </label>
                    <input
                        type="text"
                        name="itemImage"
                        placeholder="Enter the URL for this item's image"
                        value={this.state.itemImage}
                        onChange={this.handleInputChange}
                    />


                    {/* candidate for dropdown menu */}
                    <label htmlFor="itemType">Item Type </label>
                    <input
                        type="text"
                        name="itemType"
                        placeholder="Is this item pants, shirt, hat or shoes?"
                        value={this.state.itemType}
                        onChange={this.handleInputChange}
                    />

                    <div className="btnHolder">
                        <button 
                        className="submitBtn"
                        onClick={this.handleSubmit}
                        type="submit" 
                        >Submit</button> 
                    </div>

                    <br />





                    </form>

                    </div>


                </div>
            
            </div>

            

        )
    }
}

export default AddItem;
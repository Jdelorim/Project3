import React, { Component } from "react";
import "./AddItem.css";
import { Button, Card, Row, Col, Icon, Dropdown, NavItem, Input } from 'react-materialize';


class AddItem extends Component {






    render(){

        //WIP - change state to reflect the new item being passed to it

        return(
            <div className="addItem-main">
                <div className="container">
                    <div className="addItem-wrapper">
                    <div className="addItem-header">
                        <h1 className="addItem-text">Your Outfit</h1>
                    </div>

                    <form className="addItem-form">
                        {/* <ul>Mannequin {this.props.selectedClothing}</ul> */}

                        {/* <img src={classicTee} /> */}

                        <ul><img src={this.props.hatIcon}/></ul>

                        <ul><img src={this.props.shirtIcon}/></ul>

                        <ul><img src={this.props.pantsIcon}/></ul>

                        <ul><img src={this.props.shoesIcon}/></ul>




                    </form>

                    </div>


                </div>
            
            </div>



        )
    }
}

export default AddItem;
import React, { Component } from "react";
import "./Mannequin.css";
import { Button, Card, Row, Col, Icon, Dropdown, NavItem, Input } from 'react-materialize';
import classicTee from "../images/classicTee.png"


class Mannequin extends Component {






    render(){

        //WIP - change state to reflect the new item being passed to it

        return(
            <div className="mannequin-main">
                <div className="container">
                    <div className="mannequin-wrapper">
                    <div className="mannequin-header">
                        <h1 className="mannequin-text">Your Outfit</h1>
                    </div>

                    <form className="mannequin-form">
                        {/* <ul>Mannequin {this.props.selectedClothing}</ul> */}

                        {/* <img src={classicTee} /> */}

                        <ul><img src={this.props.clothingIcon}/></ul>




                    </form>

                    </div>


                </div>
            
            </div>



        )
    }
}

export default Mannequin;
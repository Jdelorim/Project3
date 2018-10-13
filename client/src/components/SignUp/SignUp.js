import React, { Component } from "react";
import "./SignUp.css";

class SignUp extends Component {

    state= {
        userName: "",
        email: "",
        password: "",
        confirmPassword: ""
    };

    handleInputChange = event => {
        let value = event.target.value;
        const name = event.target.name;

        if(name === "password" || name === "confirmPassword"){
            value = value.substring(0,15);
        }

        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if(this.state.userName === "") {
            alert("please fill out username");
        } else if (this.state.email === "") {
            alert("please fill out email");
        } else if (this.state.password === "") {
            alert("please fill out password");
        } else if (this.state.confirmPassword === "") {
            alert("please Confirm your Password")
        } else if(this.state.password !== this.state.confirmPassword) {
            alert("passwords do not match!");
        } else {
      this.setState({
          userName: "",
          email: "",
          password: "",
          confirmPassword: ""
      });

      console.log(`username: ${this.state.userName}`);
      console.log(`username: ${this.state.email}`);
      console.log(`password: ${this.state.password}`);
      console.log(`confirmPassword: ${this.state.confirmPassword}`);
    }
    };



    render(){
        return(
            <div className="SignUp-main">
                <div className="container">
                    <div className="signupWrapper">
                    <div className="SignUp-header">
                        <h1 className="SignUp-text">Sign Up</h1>
                    </div>
                <form className="SignUp-form">
                <label htmlFor="userName">Username</label>
                <input
                    type="text"
                    name="userName"
                    placeholder="username"
                    value={this.state.userName}
                    onChange={this.handleInputChange}
                />
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    placeholder="user@gmail.com"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    placeholder="password"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                />
                <label htmlFor="confirmPassword">Confim Password</label>
                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="confirm password"
                    value={this.state.confirmPassword}
                    onChange={this.handleInputChange}
                />
                <div className="btnHolder">
                    <button 
                    className="submitBtn"
                    onClick={this.handleFormSubmit}
                    type="submit" 
                    >Submit</button> 
                </div>
                <br></br>
                <div className="go-login">
                    <a href="/Login">Already got an account? Login in!</a>
                </div>
                </form>
                </div>
                </div>    
            </div>
        )
    }
}

export default SignUp;
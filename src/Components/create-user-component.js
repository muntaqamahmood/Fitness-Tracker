import React, { Component } from "react";
import axios from "axios";

export default class CreateUsers extends Component {
    //constructor to define the constructor of the parent class
    constructor(props) {
        super(props);

        //bind the methods to the class
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
        //use state to create variables in react
        this.state = {
            username: ''
        }
    }

    //when username is changed, update the state
    onChangeUsername(e) {
        this.setState({
            //target(textbox) is the element that triggered the event
            //value is the value of the textbox
            //set the username to the value of the textbox
            username: e.target.value
        });
    }

    //when submit button is clicked, update the state
    onSubmit(e) {
        e.preventDefault();

        const user = {
            username: this.state.username
        }

        console.log(user);
        

        //send the user to the backend with POST request
        axios.post('http://localhost:5000/users/add', user)
            .then(res => console.log(res.data));

        //set the username back to an empty string
        this.setState({
            username: ''
        })
    }

    render() {
        return (
            <div>
                <h3>Create New User</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <input type="text" required className="form-control" value={this.state.username} onChange={this.onChangeUsername} />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create User" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
import React, { Component } from "react";
import DatePicker from "react-datepicker";
//import stayling for datepicker
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

export default class CreateExercises extends Component {
    //super to define the constructor of the parent class
    constructor(props) {
        super(props);

        //bind the methods to the class
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        //use state to create variables in react
        this.state = {
            username: '',
            description: '',
            duration: 0,
            date: new Date(),
            //drpdown list of users from the database
            users: []
        }
    }

    //React lifecycle method that is called right before anything is displayed on the page
    componentDidMount() {
        //get the list of users from the database
        axios.get('http://localhost:5000/users/')
            //then is a promise that returns a response
            .then(response => {
                //if there are users in the database
                if (response.data.length > 0) {
                    //set the state of the users to the list of users
                    this.setState({
                        //map through all users and return username
                        users: response.data.map(user => user.username),
                        //set the username to the first user in the list
                        username: response.data[0].username
                    })
                }
            })
    }

        // this.setState({
        //     //users is populated with the users from this array
        //     users: ['test user'],
        //     username: 'test user'
        // })

    //when username is changed, update the state
    onChangeUsername(e) {
        this.setState({
            //target(textbox) is the element that triggered the event
            //value is the value of the textbox
            //set the username to the value of the textbox
            username: e.target.value
        });
    }
    //when description is changed, update the state
    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }
    //when duration is changed, update the state
    onChangeDuration(e) {
        this.setState({
            duration: e.target.value
        });
    }
    //when date is changed, update the state
    //pass in the date from a library as a parameter, 
    //"date" is a calendar that pops up
    onChangeDate(date) {
        this.setState({
            date: date
        });
    }
    //when submit button is clicked, update the state
    onSubmit(e) {
        //prevent default html form submit behavior from taking place
        e.preventDefault();

        //create a new exercise object
        const exercise = {
            //update the newly created exercise object with the values from the state
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date
        }
        //log the exercise object to the console
        console.log(exercise);

        //send the exercise object to the backend
        axios.post('http://localhost:5000/exercises/add', exercise)
            .then(res => console.log(res.data));


        //go back to list of exercises after submitting
        window.location = "/";

    }


    //render the component to the DOM (display it on the screen) 
    render() {
        return (
            <div>
                <h3>Create New Exercise Log</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <select ref="userInput"
                            //when the dropdown list is changed, update the state
                            required
                            className="form-control"
                            defaultValue={this.state.username}
                            onChange={this.onChangeUsername}>
                            {
                                //for each user in the users array, create a new option element
                                this.state.users.map(function(user) {
                                    return <option
                                        key={user}
                                        defaultValue={user}>{user}
                                    </option>;
                                })
                            }
                        </select>
                    </div>
                        {/* //create a textbox for the description */}
                        <div className="form-group">
                            <label>Description: </label>
                            <input type="text"
                                required
                                className="form-control"
                                defaultValue={this.state.description}
                                onChange={this.onChangeDescription}
                            />
                        </div>
                        {/* //create a textbox for the duration */}
                        <div className="form-group">
                            <label>Duration (in minutes): </label>
                            <input type="text"
                                required
                                className="form-control"
                                defaultValue={this.state.duration}
                                onChange={this.onChangeDuration}
                            />
                        </div>
                        {/* //create a textbox for the date */}
                        <div className="form-group">
                            <label>Date: </label>
                            <div>
                                <DatePicker
                                    selected={this.state.date}
                                    onChange={this.onChangeDate}
                                />
                            </div>
                        </div>
                        {/* //create a submit button */}
                        <div className="form-group">
                            <input type="submit" defaultValue="Create Exercise Log" className="btn btn-primary" />
                        </div>
                </form>
            </div>
            )
        }
    }
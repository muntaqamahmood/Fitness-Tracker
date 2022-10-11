import React, { Component } from "react";

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
            username: "",
            description: "",
            duration: 0,
            date: new Date(),
            //drpdown list of users from the database
            users: []
        }
    }

    //React lifecycle method that is called right before anything is displayed on the page
    componentDidMount() {
        this.setState({
            users: ["test user"],
            username: "test user"
        })
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
    //when description is changed, update the state
    onChangeDescription(e) {
        this.state({
            description: e.target.value
        })
    }
    //when duration is changed, update the state
    onChangeDuration(e) {
        this.state({
            duration: e.target.value
        })
    }
    //when date is changed, update the state
    //pass in the date from a library as a parameter, 
    //"date" is a calendar that pops up
    onChangeDate(date) {
        this.state({
            date: date
        })
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

        //go back to list of exercises after submitting
        window.location = "/";

    }


    //render the component to the DOM (display it on the screen) 
    render() {
        return (
            <div>
                <p>You are on the Create Exercises Component</p>
            </div>
        )
    }
}
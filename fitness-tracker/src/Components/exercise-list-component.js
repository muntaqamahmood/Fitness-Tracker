import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

//create a class that extends the component class
const Exercise = (props) => (
    <tr>
        {/* link to the edit page */}
        <td>{props.exercise.username}</td>
        {/* link to the edit page */}
        <td>{props.exercise.description}</td>
        {/* duration is in minutes, so convert to hours and minutes */}
        <td>{props.exercise.duration}</td>
        {/* convert the date to a string */}
        <td>{props.exercise.date.substring(0,10)}</td>
        <td>
            {/* link to the edit page */}
            {/* button to delete the exercise */}
            {/* // eslint-disable-next-line */}
            <Link to={"/edit/"+props.exercise._id}>edit</Link> | <a href="#" onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</a>
        </td>
    </tr>
)

export default class ExercisesList extends Component {
    constructor(props) {
        super(props);

        this.deleteExercise = this.deleteExercise.bind(this);

        this.state = { exercises: [] };

    }

    componentDidMount() {
        //get the list of exercises from the database
        axios.get('http://localhost:3000/exercises/')
            .then(response => {
                //get all the fields of each exercise from the database 
                //and set the state of exercises to the list of exercises
                this.setState({ exercises: response.data })
            })
            .catch((error) => {
                //if there is an error, log it to the console
                console.log(error);
            })
    }
    //when delete button is clicked, delete the exercise from the database
    deleteExercise(id) {
        //delete the exercise with id from the database
        axios.delete('http://localhost:3000/exercises/' + id)
            //then is a promise that returns a response
            .then(res => console.log(res.data));
        
        //set the state of exercises to the list of exercises without the deleted exercise
        this.setState({
            //filter through all exercises and return the exercises that do not have the id of the deleted exercise
            exercises: this.state.exercises.filter(el => el._id !== id)
        })
    }
    //
    exerciseList() {
        return this.state.exercises.map(currentexercise => {
            //return a table row for each exercise
            //each table row has the fields of the exercise
            //each table row has a delete button
            //when the delete button is clicked, the deleteExercise function is called
            //the id of the exercise is passed to the deleteExercise function
            //the deleteExercise function deletes the exercise from the database
            //the deleteExercise function sets the state of exercises to the list of exercises without the deleted exercise
            return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id} />;
        })
    }

    render() {
        return (
            <div>
                <h3>Logged Exercises</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Username</th>
                            <th>Description</th>
                            <th>Duration (in mins)</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.exerciseList()}
                    </tbody>
                </table>
            </div>
        )
    }
}
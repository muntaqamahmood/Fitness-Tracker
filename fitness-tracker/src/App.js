import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./Components/navbar-component";
import ExercisesList from "./Components/exercise-list-component";
import EditExercise from "./Components/edit-exercise-component";
import CreateExercise from "./Components/create-exercise-component";
import CreateUser from "./Components/create-user-component";

function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <Route path="/" exact component={ExercisesList} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} />
    </Router>
  );
}

export default App;

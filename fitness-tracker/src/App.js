import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./Components/navbar-component";
import ExerciseList from "./Components/exercise-list-component";
import EditExercise from "./Components/edit-exercise-component";
import CreateExercise from "./Components/create-exercise-component";
import CreateUser from "./Components/create-user-component";


function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <Route path="/exerciseList" component={ExerciseList} />
      <Route path="/create/exercise" component={CreateExercise} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create/user" component={CreateUser} />
    </Router>
  );
}

export default App;

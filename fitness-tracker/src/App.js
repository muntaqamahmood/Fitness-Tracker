import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
// import { Routes } from "react-router-dom";

import Navbar from './Components/navbar-component';
import ExerciseList from './Components/exercise-list-component';
import EditExercise from './Components/edit-exercise-component';
import CreateExercise from './Components/create-exercise-component';
import CreateUser from './Components/create-user-component';

function App() {
  // root.render(
  return (
    <BrowserRouter>
    <Navbar />
    <br />
      <Routes>
        <Route path="/" exact element={<ExerciseList />} />
        <Route path="/edit/:id" exact element={<EditExercise />} />
        <Route path="/create" element={<CreateExercise />} />
        <Route path="/user" element={<CreateUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

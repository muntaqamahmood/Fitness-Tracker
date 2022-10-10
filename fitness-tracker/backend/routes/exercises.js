const express = require('express');
const exercisesRouter = express.Router();
const Exercise = require('../models/Exercise');

exercisesRouter.get('/', (req, res) => {
    Exercise.find()
    .then(exercises => res.send(exercises))
    .catch(error => res.status(400).json('Error: ' + error));
});

exercisesRouter.post('/add', (req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExercise = new Exercise({
        username,
        description,
        duration,
        date,
    });

    newExercise.save()
    .then(() => res.send('Exercise added!'))
    .catch(error => res.status(400).json('Error: ' + error));
});

exercisesRouter.delete('/id', (req, res) => {
    Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.send('Deleted exercise with id: ' + Exercise.id))
    .catch(err => res.status(400).json('Error: ' + err));
});

exercisesRouter.post('/update/:id', (req, res) => {
    Exercise.findById(req.params.id)
    .then(exercise => {
        exercise.username = req.body.username;
        exercise.description = req.body.description;
        exercise.duration = Number(req.body.duration);
        exercise.date = Date.parse(req.body.date);

        exercise.save()
        .then(() => res.send('Exercise updated!'))
        .catch(error => res.status(400).json('Error: ' + error));
    })
    .catch(error => res.status(400).json('Error: ' + error));
});

module.exports = exercisesRouter;
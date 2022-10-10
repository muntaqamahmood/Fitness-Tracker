const express = require('express');
const exercisesRouter = express.Router();
const Exercise = require('../models/Exercise');

// exercisesRouter.get('/', (request, response) => response.send('Hello World'));

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

module.exports = exercisesRouter;
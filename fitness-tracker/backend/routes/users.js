const express = require('express');
const usersRouter = express.Router();
const User = require('../models/User');

usersRouter.get('/', (req, res) => {
    User.find()
    .then(users => res.send(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

usersRouter.get('/id', (req, res) => {
    User.findById(req.params.id)
    .then(users => res.send(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

usersRouter.post('/add', (req, res) => {
    const username = req.body.username;
    const newUser = new User({username});

    newUser.save()
    .then(() => res.send('User Added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

usersRouter.delete('/id', (req, res) => {
    User.findByIdAndDelete(req.params.id)
    .then(() => res.send('Deleted user with id: ' + User.id))
    .catch(err => res.status(400).json('Error: ' + err));
});

usersRouter.put('/id', (req, res) => {
    User.findByIdAndUpdate(req.params.id)
    .then(() => res.send(User.username))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = usersRouter;
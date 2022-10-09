const usersRouter = require('express').Router();
const User = require('../models/User');

usersRouter.get('/', (req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

usersRouter.post('/add', (req, res) => {
    const username = req.body.username;
    const newUser = new User(username);

    newUser.save()
    .then(() => res.json('User Added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = usersRouter;
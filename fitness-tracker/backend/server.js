const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');
const path = require('path');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const URI = process.env.MONGODB_URL;
mongoose.connect(URI
    // err => {
    //     if(err) throw err;
    //         console.log('Connection to MongoDB failed: ' + err);
    //     }
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
    }
);


app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

// ----------------- Deployment -----------------

//const __dirname = path.resolve();
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/frontend/build')));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    });
} else {
    app.get('/', (req, res) => {
        res.send('API is running...');
    });
}
// ----------------- Deployment -----------------

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
}
);

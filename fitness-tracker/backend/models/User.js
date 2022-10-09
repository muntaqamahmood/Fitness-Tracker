//require mongoose
const mongoose = require('mongoose');
//defining the mongoose User Schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minLength: 3
    },
}, {
    //track modified/created time
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

//export mongoose User Model
module.exports = User;
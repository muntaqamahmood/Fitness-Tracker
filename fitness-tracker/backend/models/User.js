//require mongoose
const mongoose = require('mongoose');
//mongoose Schema
const Schema = mongoose.Schema;

//defining the User Schema
const userSchema = new Schema({
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
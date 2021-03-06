const mongoose = require('mongoose')
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;




const UserSchema = new Schema({
    name: {
        type: String
    },
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    type: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
})
module.exports = User = mongoose.model('users', UserSchema)
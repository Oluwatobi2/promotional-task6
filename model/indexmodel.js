const mongoose = require('mongoose');
const { Schema } = mongoose;

const user = new Schema ({
    username: String,
    email: String,
    password: String,
    status: String
})

const taskSchema = mongoose.model('users', user);

module.exports = { taskSchema };
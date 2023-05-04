const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    id: {
        type: String,
    },
    email_id: {
        type: String,
        required: true,
        unique: true
    },
    type_customer: {
        type: String,
    },
    password: {
        type: String,
        required: false
    },
    creation_date: {
        type: String,
        required: true
    },
    last_login: {
        type: String,
        required: false
    },
})

module.exports = mongoose.model("users", UserSchema)
const mongoose = require('mongoose');

const CustomerSchema = new Schema({

    id: {
        type: String,
    },
    user_id: {
        type: String,
        required: true
    },
    first_name: {
        type: STRING,
        required: true
    },
    last_name: {
        type: STRING,
        required: true
    },
    email_id: {
        type: STRING,
        required: true
    },
    contact: {
        type: STRING,
        required: true
    },
    address: {
        type: STRING,
        required: true
    },
    zipcode: {
        type: STRING,
        required: true
    },
    country: {
        type: STRING,
        required: true
    },
    state: {
        type: STRING,
        required: true
    },
    county: {
        type: STRING,
        required: true
    },
});

module.exports = mongoose.model("customers", CustomerSchema)
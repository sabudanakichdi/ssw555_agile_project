const mongoose = require('mongoose');

const SalesDetailSchema = new Schema({

    id: {
        type: String,
    },
    customer_id: {
        type: String,
        required: true,
    },
    area: {
        type: STRING,
        required: true
    },
    type_of_installation: {
        type: STRING,
        required: true
    },
    delivery_date: {
        type: STRING,
    },
    isAgreement: {
        type: Boolean,
        required: false
    },
    installation_charges: {
        type: STRING,
        required: true
    },
    solar_panel_charges: {
        type: STRING,
        required: true
    },
    tax: {
        type: STRING,
        required: true
    },
    grandTotal: {
        type: STRING,
        required: true
    },
    isPaymentComplete: {
        type: Boolean,
        required: true
    },
});

module.exports = mongoose.model("salesDetail", SalesDetailSchema)
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
    },
    solar_panel_charges: {
        type: STRING,
    },
    tax: {
        type: STRING,
    },
    grandTotal: {
        type: STRING,
    },
    isPaymentComplete: {
        type: Boolean,
    },
});

module.exports = mongoose.model("salesDetail", SalesDetailSchema)
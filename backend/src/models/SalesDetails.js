const mongoose = require('mongoose');

const SalesDetailSchema = mongoose.Schema({

    id: {
        type: String,
    },
    customer_id: {
        type: String,
        required: true,
    },
    area: {
        type: String,
        required: true
    },
    type_of_installation: {
        type: String,
        required: true
    },
    delivery_date: {
        type: String,
    },
    isAgreement: {
        type: String,
        required: false
    },
    installation_charges: {
        type: String,
    },
    solar_panel_charges: {
        type: String,
    },
    tax: {
        type: String,
    },
    grandTotal: {
        type: String,
    },
    isPaymentComplete: {
        type: String,
    },
});

module.exports = mongoose.model("salesdetails", SalesDetailSchema)
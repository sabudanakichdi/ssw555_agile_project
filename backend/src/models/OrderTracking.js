const mongoose = require('mongoose');

const OrderTrackingSchema = mongoose.Schema({

    id: {
        type: String,
    },
    customer_id: {
        type: String,
        required: true,
    },
    sales_id: {
        type: String,
        required: true,
    },
    bo_status: {
        type: String,
        required: true
    },
    installation_date: {
        type: String,
        required: true
    },
    status: {
        type: String,
    },
});

module.exports = mongoose.model("ordertrackings", OrderTrackingSchema)
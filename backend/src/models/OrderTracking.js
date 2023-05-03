const mongoose = require('mongoose');

const OrderTrackingSchema = new Schema({

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
        type: STRING,
        required: true
    },
    installation_date: {
        type: STRING,
        required: true
    },
    status: {
        type: STRING,
    },
});

module.exports = mongoose.model("orderTracking", OrderTrackingSchema)
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../config/auth');

const { check, validationResult } = require('express-validator');
const Customer = require('../models/Customers');
const SalesDetail = require('../models/SalesDetail');
const User = require('../models/Users');
const customer = require('../models/Customer');
const OrderTracking = require('../models/OrderTracking');

// @route POST api/isAgreement
// @desc Record Agreement Status
// @access Public
router.put('/', auth, [
], async (req, res) => {

    //const errors = validationResult(req);
    //if (!errors.isEmpty()) {
    //    return res.status(400).json({ errors: errors.array() });
    //}

    const { customer_id,
        isAgreement
    } = req.body;
    try {
        let checkUser = await SalesDetail.findOne({ customer_id });

        //Checking if there is an existing register email by sales team
        if (checkUser) {
            console.log("Agreement Failed: No User Found");
            return res.status(400).json({ msg: "User needs  to be registered by Sales Executive. Please Contact Sales Team" });
        }

        const salesRes;
        if (isAgreement === 'Y') {
            salesRes = await SalesDetail.updateOne({ customer_id: customer_id },
                {
                    isAgreement = 'Y'
                },
                function (err, docs) {
                    if (err) {
                        console.log(err)
                    }
                    else {
                        console.log("Agreement Update Failed: Updated Docs : ", docs);
                    }
                });
        }
        if (!salesRes) {
            console.log("Agreement Update Failed: DB Sales Details persist isssue");
            return res.status(400).json({ msg: "Cannot Update Agreement. Please try again later" });
        }

        const payload = {
            customer: {
                id: customer_id,
                isAgreement: 'Y'
            }
        }
        return res.status(201).json({ payload });

    } catch (err) {
        console.log("Agreement update Error: ", err)
        res.status(500).send("server error")
    }
});

// @route POST api/isPayment
// @desc Record Payment status
// @access Public
router.put('/', auth, [
], async (req, res) => {

    //const errors = validationResult(req);
    //if (!errors.isEmpty()) {
    //    return res.status(400).json({ errors: errors.array() });
    //}

    const { customer_id,
        isPayment
    } = req.body;
    try {
        let checkUser = await SalesDetail.findOne({ customer_id });

        //Checking if there is an existing register email by sales team
        if (checkUser) {
            console.log("Payment Failed: No User Found");
            return res.status(400).json({ msg: "User needs  to be registered by Sales Executive. Please Contact Sales Team" });
        }

        const salesRes;
        if (isPayment === 'Y') {
            salesRes = await SalesDetail.updateOne({ customer_id: customer_id },
                {
                    isPayment = 'Y'
                },
                function (err, docs) {
                    if (err) {
                        console.log(err)
                    }
                    else {
                        console.log("Payment Update Failed: Updated Docs : ", docs);
                    }
                });
        }
        if (!salesRes) {
            console.log("Payment Update Failed: DB Sales Details persist isssue");
            return res.status(400).json({ msg: "Cannot Update Payment. Please try again later" });
        }

        const salesId = checkUser.id;

        const order = new OrderTracking({
            customer_id,
            sales_id,
            bo_status,
            installation_date,
            status,
        });

        order.customer_id = customer_id;
        order.sales_id = salesId;
        order.bo_status = 'Y';
        order.installation_date = checkUser.delivery_date;
        order.status = 'N';
        orderRes = await order.save();
        console.log(orderRes);

        if (!orderRes) {
            console.log("Payment Update Failed: DB Order Details persist isssue");
            return res.status(400).json({ msg: "Cannot Update Payment. Please try again later" });
        }

        const payload = {
            customer: {
                id: customer_id,
                isPayment: 'Y'
            }
        }
        return res.status(200).jsin({ payload });

    } catch (err) {
        console.log("Payment update Error: ", err)
        res.status(500).send("server error")
    }

});

// @route POST api/status
// @desc update install status
// @access Public
router.put('/', auth, [
], async (req, res) => {

    //const errors = validationResult(req);
    //if (!errors.isEmpty()) {
    //    return res.status(400).json({ errors: errors.array() });
    //}

    const { customer_id,
        status
    } = req.body;
    try {
        let order = await OrderTracking.findOne({ customer_id });

        //Checking if there is an existing register email by sales team
        if (oreder) {
            console.log("Order Status Failed: No Order Found");
            return res.status(400).json({ msg: "Oder Not Found. Please Contact Sales Team" });
        }

        const salesRes;
        if (status === 'Y') {
            orderRes = await OrderTracking.updateOne({ id: order.id },
                {
                    status = 'Y'
                },
                function (err, docs) {
                    if (err) {
                        console.log(err)
                    }
                    else {
                        console.log("Order Status Update Failed: Updated Docs : ", docs);
                    }
                });
        }
        if (!orderRes) {
            console.log("Order Status Update Failed: DB Sales Details persist isssue");
            return res.status(400).json({ msg: "Cannot Update Status. Please try again later" });
        }

        const payload = {
            customer: {
                id: customer_id,
                status: 'Y'
            }
        }
        return res.status(201).json({ payload });

    } catch (err) {
        console.log("Order Status update Error: ", err)
        res.status(500).send("server error")
    }
});

// @route POST api/installDate
// @desc edit install date
// @access Public
router.put('/', auth, [
    check("install_date", "Please enter installation date").isLength({ min: 1 })
], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { customer_id,
        install_date
    } = req.body;
    try {
        let order = await OrderTracking.findOne({ customer_id });

        //Checking if there is an existing register email by sales team
        if (oreder) {
            console.log("Order Date Failed: No Order Found");
            return res.status(400).json({ msg: "Oder Not Found. Please Contact Sales Team" });
        }

        if (status === 'Y') {
            orderRes = await OrderTracking.updateOne({ id: order.id },
                {
                    installation_date = install_date
                },
                function (err, docs) {
                    if (err) {
                        console.log(err)
                    }
                    else {
                        console.log("Order Date Update Failed: Updated Docs : ", docs);
                    }
                });
        }
        if (!orderRes) {
            console.log("Order Date Update Failed: DB Sales Details persist isssue");
            return res.status(400).json({ msg: "Cannot Update Status. Please try again later" });
        }

        const payload = {
            customer: {
                id: customer_id,
                install_date: install_date
            }
        }
        return res.status(201).json({ payload });

    } catch (err) {
        console.log("Order Date update Error: ", err)
        res.status(500).send("server error")
    }
});

// @route get api/tracking
// @desc get all users tracking
// @access Public
router.get('/', auth, async (req, res) => {
    try {
        const customerDb = await Customer.findOne({ id: req.customer_id }).sort({ date: -1 });
        if (!customerDb) {
            return res.status(200).json({ msg: "Customer Not Found" });
        }
        const salesDetails = await SalesDetail.findOne({ customer_id: customerDb.id }).sort({ date: -1 });
        const order = await OrderTracking.findOne({ customer_id: customerDb.id }).sort({ date: -1 });
        const customer = {
            user_id,
            first_name,
            last_name,
            email_id,
            contact,
            address,
            zipcode,
            country,
            state,
            county,
            area,
            type_of_installation,
            delivery_date,
            isAgreement,
            installation_charges,
            solar_panel_charges,
            tax,
            grandTotal,
            isPaymentComplete,
            order_id,
            bo_status,
            installation_date,
            status,
        }
        customer.user_id = customerDb.userid;
        customer.first_name = customerDb.first_name;
        customer.last_name = customerDb.last_name;
        customer.email_id = customerDb.email_id;
        customer.contact = customerDb.contact;
        customer.address = customerDb.address;
        customer.zipcode = customerDb.zipcode;
        customer.country = customerDb.country;
        customer.state = customerDb.state;
        customer.county = customerDb.county;
        customer.area = salesDetails.area;
        customer.type_of_installation = salesDetails.type_of_installation;
        customer.delivery_date = salesDetails.delivery_date;
        customer.isAgreement = salesDetails.isAgreement;
        customer.installation_charges = salesDetails.installation_charges;
        customer.solar_panel_charges = salesDetails.solar_panel_charges;
        customer.tax = salesDetails.tax;
        customer.grandTotal = salesDetails.grandTotal;
        customer.isPaymentComplete = salesDetails.isPaymentComplete;
        customer.order_id = order.id;
        customer.bo_status = order.bo_status;
        customer.installation_date = order.installation_date;
        customer.status = order.status;

        const payload = {
            customer: customer
        }

        return res.status(200).json(payload)
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Failer");

    }

});

// @route get api/isToggle
// @desc get all users agreement or payment Y/N
// @access Public
router.get('/', auth, async (req, res) => {
    try {
        const customerDb = await Customer.findOne({ id: req.customer_id }).sort({ date: -1 });
        if (!customerDb) {
            return res.status(200).json({ msg: "Customer Not Found" });
        }
        const salesDetails = await SalesDetail.findOne({ customer_id: customerDb.id }).sort({ date: -1 });
        const customer = {
            customer_id,
            isAgreement,
            isPaymentComplete,
        }
        customer.customer_id = customerDb.id
        customer.isAgreement = salesDetails.isAgreement;
        customer.isPaymentComplete = salesDetails.isPaymentComplete;

        const payload = {
            customer: customer
        }

        return res.status(200).json(payload)
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Failer");

    }

});


module.exports = router;
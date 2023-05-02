const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../middleware/auth');

const { check, validationResult } = require('express-validator');
const Customer = require('../models/Customers');
const SalesDetail = require('../models/SalesDetail');
const User = require('../models/Users');
const customer = require('../models/customer');

// @route POST api/customerdetails
// @desc Register a user
// @access Public
router.post('/', auth, [
    check("email", "Please include valid email").isEmail(),
    check("password", "Please enter password with 8 or more character").isLength({ min: 6 })
], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { first_name,
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
        isEdit,
        } = req.body;
    try {
        let checkUser = await User.findOne({ email_id });

        //Checking if there is an existing register email by sales team
        if (checkUser && isEdit === 'N') {
            console.log("Customr Onboard Failed: No User Found");
            return res.status(400).json({ msg: "User needs  to be registered by Sales Executive. Please Contact Sales Team" });
        }

        const userid;
        if (isEdit == 'Y') {
        userid = checkUser.user_id;
        } else {
            user = new User({
                email_id,
                type,
                creation_date,
            });
            user.email_id = email_id;
            let day = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();
            console.log(year + month + day);
            user.creation_date = year + month + day;
            //Save user registeration data
            const userRes = await user.save();
            if (userRes) {
                userid = userRes.id;
            } else {
                console.log("Customr Onboard Failed: User DB entry failed");
                return res.status(400).json({ msg: "User entry failed." });
            }
        }

        const dbRes;
        if (isEdit == 'Y') {
            dbRes = await Customer.updateOne({ email_id: email_id },
                {
                    user_id = userid,
                    first_name = first_name,
                    last_name = last_name,
                    contact = contact,
                    address = address,
                    zipcode = zipcode,
                    country = country,
                    state = state,
                    county = county,
                },
                function (err, docs) {
                    if (err) {
                        console.log(err)
                    }
                    else {
                        console.log("Customr Onboard Failed: Updated Docs : ", docs);
                    }
                });
        } else {
            customer = new Customr({
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
            });
            customer.user_id = userid;
            customer.first_name = first_name;
            customer.last_name = last_name;
            customer.email_id = email_id;
            customer.contact = contact;
            customer.address = address;
            customer.zipcode = zipcode;
            customer.country = country;
            customer.state = state;
            customer.county = county;
            dbRes = await Customer.save();
		}
        
        const customer_id;
        if (!dbRes) {
            console.log("Customr Onboard Failed: DB Customer persist isssue");
            return res.status(400).json({ msg: "Cannot Register. Please try again later" });
        } else {
            const cust = await Customer.findOne({ email_id });
            customer_id = cust.customer_id;
        }

        const salesRes;
        var installCharge = area * 40;
        var spCharge = area * 250;
        var tax = (installCharge + spCharge) * 0.1
        var gt = installCharge + spCharge + tax;
        if (isEdit === 'Y') {
            salesRes = await SalesDetail.updateOne({ customer_id: customer_id },
                {
                    customer_id = customer_id,
                    area = area,
                    type_of_installation = type_of_installation,
                    delivery_date = delivery_date,
                    isAgreement = '',
                    installation_charges = installCharge,
                    solar_panel_charges = spCharge,
                    tax = tax,
                    grandTotal = gt,
                    isPaymentComplete = '',
                },
                function (err, docs) {
                    if (err) {
                        console.log(err)
                    }
                    else {
                        console.log("Customr Onboard Failed: Updated Docs : ", docs);
                    }
                });
        } else {
            const salesId = {
                customer_id,
                area,
                typOfInstallation,
                deliveryDate,
                isAgreement,
                installation_charges,
                solar_panel_charges,
                tax,
                grandTotal,
                isPaymentComplete,
            }
            salesIs.customer_id = customer_id;
            salesId.area = area;
            salesId.typOfInstallation = type_of_installation;
            salesId.deliveryDate = delivery_date;
            salesId.isAgreement = '';
            salesId.installation_charges = installCharge;
            salesId.solar_panel_charges = spCharge;
            salesId.tax = tax;
            salesId.grandTotal = gt;
            salesId.isPaymentComplete = '';
            salesRes = await salesId.save();
        }
        if (!salesRes) {
            console.log("Customr Onboard Failed: DB Sales Details persist isssue");
            return res.status(400).json({ msg: "Cannot Register. Please try again later" });
        }

        const payload = {
            customer: {
                id: customer_id
            }
        }
        if (isEdit !== 'N') {
            return res.status(200).jsin({ payload });
		}
        return res.status(201).json({ payload });

    } catch (err) {
        console.log("Register Error: ", err)
        res.status(500).send("server error")
    }

});

// @route get api/customerdetails
// @desc get all users contact
// @access Public
router.get('/', auth, async (req, res) => {
    try {
        const customerDb = await Customer.findOne({ email_id: req.email_id }).sort({ date: -1 });
        if (!customerDb) {
            return res.status(200).json({ msg: "New" });
        }
        const salesDetails = await SalesDetail.findOne({ customer_id: customerDb.id }).sort({ date: -1 });
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
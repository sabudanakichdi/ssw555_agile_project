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

        const dbRes;

        if (isEdit == 'Y') {
            dbRes = await Customer.updateOne({ email_id: user.email_id },
                {
                    user_id = userid,
                    first_name = first_name,
                    last_name = last_name,
                    email_id = email_id,
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
                        console.log("Register Failed: Updated Docs : ", docs);
                    }
                });
        } else {
            dbRes = await Customer.save();
		}
        

        if (!dbRes) {
            console.log("Register Failed: DB persist isssue");
            return res.status(400).json({ msg: "Cannot Register. Please try again later" });
        }
        const payload = {
            user: {
                id: user.id
            }
        }



        jwt.sign(payload, config.get('jwtSecretKey'), { expiresIn: 36000 }, (err, token) => {
            if (err) throw err;
            res.json({ token });
        })

    } catch (err) {
        console.log("Register Error: ", err)
        res.status(500).send("server error")
    }

});

// @route POST api/login
// @desc Login user
// @access Public
router.post('/', [
    check("email", "Please include valid email").isEmail(),
    check("password", "Please enter password with 8 or more character").isLength({ min: 6 })
], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email_id, password } = req.body;
    try {
        let user = await User.findOne({ email_id });

        //Checking if there is user exist
        if (!user) {
            console.log("Login Error: No User Found");
            return res.status(400).json({ msg: "User needs  to be registered by Sales Executive. Please Contact Sales Team" });
        }

        //Encrypt user password
        const salt = await bcrypt.genSalt(10);
        hashedPassword = await bcrypt.hash(password, salt);
        console.log(hashedPassword);
        if (hashedPassword !== user.password) {
            console.log("Login Error: Wrong Password");
            return res.status(400).json({ msg: "Incorrect email id or password" })
        }

        const payload = {
            user: {
                id: user.id
            }
        }
        jwt.sign(payload, config.get('jwtSecretKey'), { expiresIn: 36000 }, (err, token) => {
            if (err) throw err;
            res.json({ token });
        })

    } catch (err) {
        console.log("Login Error: ", err)
        res.status(500).send("Server Error")
    }

});


module.exports = router;
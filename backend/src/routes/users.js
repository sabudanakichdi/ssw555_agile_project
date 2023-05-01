const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

const User = require('../models/Users')

// @route POST api/register
// @desc Register a user
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
        let checkUser = await User.findOne({ email_id });

        //Checking if there is an existing register email by sales team
        if (!checkUser) {
            console.log("Register Failed: No User Found");
            return res.status(400).json({ msg: "User needs  to be registered by Sales Executive. Please Contact Sales Team" });
        }
        //Checking if user has already set password
        if (checkUser.last_login) {
            console.log("Register Failed: User Already Exist");
            return res.status(400).json({ msg: "User Already Exist. Please Login or Reset Password." });
        }

        user = new User({
            email_id,
            password,
            type,
            creation_date,
            last_login
        });

        //Encrypt user password
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        console.log(year + month + day);
        user.creation_date = year + month + day;
        user.last_login = year + month + day;

        //Save user registeration data
        const dbRes = await User.updateOne({ email_id: user.email_id },
            { type: user.type,
                password: user.password,
                creation_date: user.creation_date,
                last_login: user.last_login },
            function (err, docs) {
                if (err) {
                    console.log(err)
                }
                else {
                    console.log("Register Failed: Updated Docs : ", docs);
                }
            });

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
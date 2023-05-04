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
    check("email_id", "Please include valid email").isEmail(),
    check("password", "Please enter password with 8 or more character").isLength({ min: 6 })
], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email_id, password } = req.body;
    try {
        var checkUser;
        await User.findOne({ email_id }).then(result => {
            if (result) {
                console.log(result); // Found a matching document
                checkUser = result
            } else {
                console.log('No matching document found');
            }
        });

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

        user = new User();

        //Encrypt user password
       // const salt = await bcrypt.genSalt(10);
        user.email_id = email_id;
        user.password = password;

        let date = new Date()
        user.creation_date = date;
        user.last_login = date;

        //Save user registeration data
        await User.updateOne({ email_id: user.email_id },
            { type: user.type,
                password: user.password,
                creation_date: user.creation_date,
                last_login: user.last_login
            }).exec().then(result => {
                console.log("Customr Register Success: Updated Docs");
                dbPersist = result.acknowledged
            })
            .catch(err => {
                console.error(err);
            });
        if (!dbPersist) {
            console.log("Register Failed: DB persist isssue");
            return res.status(400).json({ msg: "Cannot Register. Please try again later" });
        }

        const payload = {
            user: {
                id: user.id
            }
        }
        jwt.sign(payload, "iamking", { expiresIn: 36000 }, (err, token) => {
            if (err) throw err;
            res.json({ token });
        })

    } catch (err) {
        console.log("Register Error: ", err)
        res.status(500).send("server error")
    }

});


module.exports = router;
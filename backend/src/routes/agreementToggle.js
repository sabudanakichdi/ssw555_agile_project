const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const config = require("config");
const auth = require("../config/auth");

const { check, validationResult } = require("express-validator");
const Customer = require("../models/Customers");
const SalesDetail = require("../models/SalesDetails");
const User = require("../models/Users");
const customer = require("../models/Customers");
const OrderTracking = require("../models/OrderTracking");

// @route get api/isToggle
// @desc get all users agreement or payment Y/N
// @access Public
router.get("/", auth, async (req, res) => {
  try {
    var customerDb;
    
    await Customer.findOne({ _id: req.body.customer_id })
      .then((result) => {
        console.log("Customr Onboard Success: Updated Docs");
        customerDb = result;
      })
      .catch((err) => {
        console.error(err);
      });
    if (!customerDb) {
      return res.status(200).json({ msg: "Customer Not Found" });
    }
    var salesDetails;
    await SalesDetail.findOne({ customer_id: customerDb._id })
      .then((result) => {
        console.log("Customr Onboard Success: Updated Docs");
        salesDetails = result;
      })
      .catch((err) => {
        console.error(err);
      });
    const customer = {};
    customer.customer_id = customerDb._id;
    customer.isAgreement = salesDetails.isAgreement;
    customer.isPaymentComplete = salesDetails.isPaymentComplete;

    const payload = {
      customer: customer,
    };

    return res.status(200).json(payload);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Failer");
  }
});

module.exports = router;

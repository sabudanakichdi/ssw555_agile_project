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

// @route POST api/isAgreement
// @desc Record Agreement Status
// @access Public
router.put("/", auth, [], async (req, res) => {
  //const errors = validationResult(req);
  //if (!errors.isEmpty()) {
  //    return res.status(400).json({ errors: errors.array() });
  //}

  const { customer_id, isAgreement } = req.body;

  try {
    var checkUser;
    console.log;
    await SalesDetail.findOne({ customer_id: customer_id })
      .then((result) => {
        console.log("Customr Onboard Success: Updated Docs");
        checkUser = result;
      })
      .catch((err) => {
        console.error(err);
      });

    //Checking if there is an existing register email by sales team
    if (!checkUser) {
      console.log("Agreement Failed: No User Found");
      return res
        .status(400)
        .json({
          msg: "User needs  to be registered by Sales Executive. Please Contact Sales Team",
        });
    }

    var salesRes;
    if (isAgreement === "Y") {
      await SalesDetail.updateOne(
        { customer_id: customer_id },
        {
          isAgreement: "Y",
        }
      )
        .exec()
        .then((result) => {
          console.log("Customr Onboard Success: Updated Docs");
          salesRes = result.acknowledged;
        })
        .catch((err) => {
          console.error(err);
        });
    }
    if (!salesRes) {
      console.log("Agreement Update Failed: DB Sales Details persist isssue");
      return res
        .status(400)
        .json({ msg: "Cannot Update Agreement. Please try again later" });
    }

    const payload = {
      customer: {
        id: customer_id,
        isAgreement: "Y",
      },
    };
    return res.status(201).json({ payload });
  } catch (err) {
    console.log("Agreement update Error: ", err);
    res.status(500).send("server error");
  }
});

// @route get api/tracking
// @desc get all users tracking
// @access Public
router.get("/", auth, async (req, res) => {
  try {
    var customerDb;
    await Customer.findOne({ _id: req.query.customer_id })
      .then((result) => {
        if (result) {
          console.log(result); // Found a matching document
          customerDb = result;
        } else {
          console.log("No matching document found");
        }
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
        if (result) {
          console.log(result); // Found a matching document
          salesDetails = result;
        } else {
          console.log("No matching document found");
        }
      })
      .catch((err) => {
        console.error(err);
      });
    var order;
    await OrderTracking.findOne({ customer_id: customerDb._id })
      .then((result) => {
        if (result) {
          //console.log(result); // Found a matching document
          order = result;
        } else {
          console.log("No matching document found");
        }
      })
      .catch((err) => {
        console.error(err);
      });
    const customer = {};
    customer.user_id = customerDb.user_id;
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
    customer.order_id = order._id;
    customer.bo_status = order.bo_status;
    customer.installation_date = order.installation_date;
    customer.status = order.status;

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

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

// @route POST api/status
// @desc update install status
// @access Public
router.put("/", auth, [], async (req, res) => {
  //const errors = validationResult(req);
  //if (!errors.isEmpty()) {
  //    return res.status(400).json({ errors: errors.array() });
  //}

  const { customer_id, status } = req.body;
  try {
    var order;
    await OrderTracking.findOne({ customer_id: customer_id })
      .then((result) => {
        if (result) {
          console.log(result); // Found a matching document
          order = result;
        } else {
          console.log("No matching document found");
        }
      })
      .catch((err) => {
        console.error(err);
      });

    //Checking if there is an existing register email by sales team
    if (!order) {
      console.log("Order Status Failed: No Order Found");
      return res
        .status(400)
        .json({ msg: "Oder Not Found. Please Contact Sales Team" });
    }

    var orderRes;
    if (status === "Y") {
      await OrderTracking.updateOne(
        { id: order.id },
        {
          status: "Y",
        }
      )
        .exec()
        .then((result) => {
          console.log("Customr Onboard Success: Updated Docs");
          orderRes = result.acknowledged;
        })
        .catch((err) => {
          console.error(err);
        });
    }
    if (!orderRes) {
      console.log(
        "Order Status Update Failed: DB Sales Details persist isssue"
      );
      return res
        .status(400)
        .json({ msg: "Cannot Update Status. Please try again later" });
    }

    const payload = {
      customer: {
        id: customer_id,
        status: "Y",
      },
    };
    return res.status(201).json({ payload });
  } catch (err) {
    console.log("Order Status update Error: ", err);
    res.status(500).send("server error");
  }
});

module.exports = router;

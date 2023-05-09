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

// @route POST api/isPayment
// @desc Record Payment status
// @access Public
router.put("/", auth, [], async (req, res) => {
  //const errors = validationResult(req);
  //if (!errors.isEmpty()) {
  //    return res.status(400).json({ errors: errors.array() });
  //}

  const { customer_id, isPayment } = req.body;
  try {
    var checkUser;
    await SalesDetail.findOne({ customer_id })
      .then((result) => {
        if (result) {
          console.log(result); // Found a matching document
          checkUser = result;
        } else {
          console.log("No matching document found");
        }
      })
      .catch((err) => {
        console.error(err);
      });

    //Checking if there is an existing register email by sales team
    if (!checkUser) {
      console.log("Payment Failed: No User Found");
      return res
        .status(400)
        .json({
          msg: "User needs  to be registered by Sales Executive. Please Contact Sales Team",
        });
    }
    console.log(checkUser);
    var salesRes;
    if (isPayment === "Y") {
      await SalesDetail.updateOne(
        { customer_id: customer_id },
        {
          isPaymentComplete: "Y",
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
      console.log("Payment Update Failed: DB Sales Details persist isssue");
      return res
        .status(400)
        .json({ msg: "Cannot Update Payment. Please try again later" });
    }

    const salesId = checkUser._id;
    console.log(salesId);

    const order = new OrderTracking();

    order.customer_id = customer_id;
    order.sales_id = salesId;
    order.bo_status = "Y";
    order.installation_date = checkUser.delivery_date;
    order.status = "Order placed";
    orderRes = await order.save();
    console.log(orderRes);

    if (!orderRes) {
      console.log("Payment Update Failed: DB Order Details persist isssue");
      return res
        .status(400)
        .json({ msg: "Cannot Update Payment. Please try again later" });
    }

    const payload = {
      customer: {
        id: customer_id,
        isPayment: "Y",
      },
    };
    return res.status(200).json({ payload });
  } catch (err) {
    console.log("Payment update Error: ", err);
    res.status(500).send("server error");
  }
});

module.exports = router;

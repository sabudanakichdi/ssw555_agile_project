const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const config = require("config");
const auth = require("../config/auth");
const { check, validationResult } = require("express-validator");
const Customer = require("../models/Customers");
const SalesDetail = require("../models/SalesDetails");
const User = require("../models/Users");

// @route POST api/customerdetails
// @desc Register a user
// @access Public
router.post(
  "/",
  auth,
  [
    check("email_id", "Please include valid email").isLength({ min: 1 }),
    check("first_name", "Please enter name with 8 or more character").isLength({
      min: 1,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
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
      isEdit,
    } = req.body;
    try {
      var checkUser;
      await User.findOne({ email_id })
        .exec()
        .then((result) => {
          console.log("Customr Onboard Success: Updated Docs");
          checkUser = result;
        })
        .catch((err) => {
          console.error(err);
        });

      //Checking if there is an existing register email by sales team
      if (checkUser && isEdit === "N") {
        console.log("Customr Onboard Failed: No User Found");
        return res.status(400).json({
          msg: "User needs  to be registered by Sales Executive. Please Contact Sales Team",
        });
      }

      var user_id;
      if (isEdit == "Y") {
        userid = checkUser.id;
      } else {
        user = new User();
        user.email_id = email_id;
        console.log(new Date());
        user.creation_date = new Date();
        user.type_customer = "customer";
        //Save user registeration data
        const userRes = await user.save();
        //console.log(userRes);
        if (userRes) {
          let getUser = await User.findOne({ email_id });
          //console.log(getUser._id);
          userid = getUser._id;
        } else {
          console.log("Customr Onboard Failed: User DB entry failed");
          return res.status(400).json({ msg: "User entry failed." });
        }
      }

      var dbRes;
      if (isEdit == "Y") {
        await Customer.updateOne(
          { email_id: email_id },
          {
            user_id: userid,
            first_name: first_name,
            last_name: last_name,
            contact: contact,
            address: address,
            zipcode: zipcode,
            country: country,
            state: state,
            county: county,
          }
        )
          .exec()
          .then((result) => {
            console.log("Customr Onboard Success: Updated Docs");
            dbRes = result.acknowledged;
          })
          .catch((err) => {
            console.error(err);
          });
      } else {
        customer = new Customer();
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
        dbRes = await customer.save();
      }

      var customer_id;
      if (!dbRes) {
        console.log("Customr Onboard Failed: DB Customer persist isssue");
        return res
          .status(400)
          .json({ msg: "Cannot Register. Please try again later" });
      } else {
        const cust = await Customer.findOne({ email_id });
        customer_id = cust._id;
      }

      var salesRes;
      var installCharge = area * 40;
      var spCharge = area * 250;
      var tax = (installCharge + spCharge) * 0.1;
      var gt = installCharge + spCharge + tax;
      if (isEdit === "Y") {
        await SalesDetail.updateOne(
          { customer_id: customer_id },
          {
            customer_id: customer_id,
            area: area,
            type_of_installation: type_of_installation,
            delivery_date: delivery_date,
            isAgreement: "",
            installation_charges: installCharge,
            solar_panel_charges: spCharge,
            tax: tax,
            grandTotal: gt,
            isPaymentComplete: "",
          }
        )
          .exec()
          .then((result) => {
            console.log("Customr Onboard Success: Sales Updated Docs");
            salesRes = result.acknowledged;
          })
          .catch((err) => {
            console.error(err);
          });
      } else {
        const salesId = new SalesDetail();
        salesId.customer_id = customer_id;
        salesId.area = area;
        salesId.type_of_installation = type_of_installation;
        salesId.delivery_date = delivery_date;
        salesId.isAgreement = "";
        salesId.installation_charges = installCharge;
        salesId.solar_panel_charges = spCharge;
        salesId.tax = tax;
        salesId.grandTotal = gt;
        salesId.isPaymentComplete = "";
        salesRes = await salesId.save();
      }
      //console.log(salesRes);
      if (!salesRes) {
        console.log("Customr Onboard Failed: DB Sales Details persist isssue");
        return res
          .status(400)
          .json({ msg: "Cannot Register. Please try again later" });
      }

      const payload = {
        customer: {
          id: customer_id,
        },
      };
      if (isEdit !== "N") {
        return res.status(200).json({ payload });
      }
      return res.status(201).json({ payload });
    } catch (err) {
      console.log("Register Error: ", err);
      res.status(500).send("server error");
    }
  }
);

// @route get api/customerdetails
// @desc get all users contact
// @access Public
router.get("/", auth, async (req, res) => {
  try {
    //console.log(req);
    const customer = {};
    var userDb;
    await User.findOne({ email_id: req.query.email_id })
        .then((result) => {
            if (result) {
                //console.log(result); // Found a matching document
                userDb = result;
            } else {
                console.log("No matching document found");
            }
        })
        .catch((err) => {
            console.error(err);
        });
      if (!userDb) {
          return res.status(200).json({ msg: "User not exits" });
      }
      if (userDb.type_customer === 'customer') {
          var customerDb;
          await Customer.findOne({ email_id: req.query.email_id })
              .then((result) => {
                  if (result) {
                      //console.log(result); // Found a matching document
                      customerDb = result;
                  } else {
                      console.log("No matching document found");
                  }
              })
              .catch((err) => {
                  console.error(err);
              });
          console.log(customerDb);

          //console.log(userDb.customer_id);

          if (!customerDb) {
              return res.status(200).json({ msg: "New" });
          }
          var salesDetails;
          await SalesDetail.findOne({ customer_id: customerDb._id })
              .then((result) => {
                  if (result) {
                      //console.log(result); // Found a matching document
                      salesDetails = result;
                  } else {
                      console.log("No matching document found");
                  }
              })
              .catch((err) => {
                  console.error(err);
              });
          //console.log(salesDetails);
          
          customer.user_id = customerDb.userid;
          customer.customer_id = customerDb._id;
          customer.type_customer = userDb.type_customer;
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
          customer.salesId = salesDetails._id;
      } else {
          customer.user_id = userDb._id;
      }


    const payload = {
      customer: customer,
    };
    //console.log(customer)

    return res.status(200).json(payload);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Failer");
  }
});

module.exports = router;

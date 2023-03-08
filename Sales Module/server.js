const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

// connect to the MongoDB database
mongoose.connect('mongodb://localhost/solar-project-management-tool');

// create a schema for the customer data
const customerSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  address: String,
  city: String,
  state: String,
  zip: String,
  utilityCompany: String,
  energyUsage: Number,
  roofType: String,
  contactType: String,
  notes: String
});

// create a model for the customer data
const Customer = mongoose.model('Customer', customerSchema);

// configure middleware
app.use(bodyParser.json());

// create a new customer
app.post('/api/customers', (req, res) => {
  const customer = new Customer({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
    utilityCompany: req.body.utilityCompany,
    energyUsage: req.body.energyUsage,
    roofType: req.body.roofType,
    contactType: req.body.contactType,
    notes: req.body.notes
  });

  customer.save((err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error creating new customer');
    } else {
      res.status(200).send('Customer created successfully');
    }
  });
});

// get a list of all customers
app.get('/api/customers', (req, res) => {
  Customer.find({}, (err, customers) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error getting customers');
    } else {
      res.status(200).json(customers);
    }
  });
});

// start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});

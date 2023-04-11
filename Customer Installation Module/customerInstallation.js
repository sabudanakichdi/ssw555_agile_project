const express = require('express');
const router = express.Router();
const CustomerInstallation = require('../models/CustomerInstallation');

// POST: Create a new customer installation
router.post('/', async (req, res) => {
  try {
    const customerInstallation = new CustomerInstallation(req.body);
    await customerInstallation.save();
    res.status(201).json(customerInstallation);
  } catch (err) {
    console.error(err);
    res.status(400).send(err.message);
  }
});

// GET: Get a list of all customer installations
router.get('/', async (req, res) => {
  try {
    const customerInstallations = await CustomerInstallation.find();
    res.json(customerInstallations);
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
});

// GET: Get a single customer installation by ID
router.get('/:id', async (req, res) => {
  try {
    const customerInstallation = await CustomerInstallation.findById(req.params.id);
    if (!customerInstallation) {
      return res.status(404).send('Customer Installation not found');
    }
    res.json(customerInstallation);
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
});

// PUT: Update a customer installation by ID
router.put('/:id', async (req, res) => {
  try {
    const customerInstallation = await CustomerInstallation.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!customerInstallation) {
      return res.status(404).send('Customer Installation not found');
    }
    res.json(customerInstallation);
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
});

// DELETE: Delete a customer installation by ID
router.delete('/:id', async (req, res) => {
  try {
    const customerInstallation = await CustomerInstallation.findByIdAndDelete(req.params.id);
    if (!customerInstallation) {
      return res.status(404).send('Customer Installation not found');
    }
    res.sendStatus(204);
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
});

module.exports = router;

const express = require('express');
const app = express();
const PDFDocument = require('pdfkit');
const fs = require('fs');

// Define the data model
const SalesAgreement = require('./models/salesAgreement');//need to change this to acutal data model that we will use

// Create a new sales agreement
app.post('/sales-agreements', (req, res) => {
  const { customerName, customerEmail, projectType, projectSize, projectLocation, totalPrice } = req.body;
  const date = new Date();
  const id = generateId(); // Generate a unique ID for the sales agreement
  const salesAgreement = new SalesAgreement({ id, customerName, customerEmail, projectType, projectSize, projectLocation, totalPrice, date });
  salesAgreement.save();
  
  // Generate the PDF and return it
  const doc = new PDFDocument();
  doc.pipe(fs.createWriteStream(`sales-agreement-${id}.pdf`));
  doc.text(`Sales Agreement ID: ${id}`);
  doc.text(`Customer Name: ${customerName}`);
  doc.text(`Customer Email: ${customerEmail}`);
  doc.text(`Project Type: ${projectType}`);
  doc.text(`Project Size: ${projectSize}`);
  doc.text(`Project Location: ${projectLocation}`);
  doc.text(`Total Price: $${totalPrice}`);
  doc.text(`Date: ${date}`);
  doc.end();
  
  res.json(salesAgreement);
});

// Retrieve a specific sales agreement by ID
app.get('/sales-agreements/:id', (req, res) => {
  const salesAgreement = SalesAgreement.findById(req.params.id);
  res.json(salesAgreement);
});

// Retrieve a list of all sales agreements
app.get('/sales-agreements', (req, res) => {
  const salesAgreements = SalesAgreement.findAll();
  res.json(salesAgreements);
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});

// Helper function to generate a unique ID
function generateId() {
  return Math.random().toString(36).substring(2, 8);
}

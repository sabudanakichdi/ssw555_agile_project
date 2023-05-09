const mongoose = require('mongoose');
const OrderTracking = require('../models/orderTracking');

describe('OrderTrackingSchema', () => {
  beforeAll(async () => {
    await mongoose.connect('mongodb://localhost/mydatabase', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('should create and save an order tracking instance', async () => {
    const orderTrackingData = {
      customer_id: '12345',
      sales_id: '67890',
      bo_status: 'Ready to ship',
      installation_date: '2023-06-01',
      status: 'Processing'
    };
    const orderTracking = new OrderTracking(orderTrackingData);
    const savedOrderTracking = await orderTracking.save();
    expect(savedOrderTracking._id).toBeDefined();
    expect(savedOrderTracking.customer_id).toBe(orderTrackingData.customer_id);
    expect(savedOrderTracking.sales_id).toBe(orderTrackingData.sales_id);
    expect(savedOrderTracking.bo_status).toBe(orderTrackingData.bo_status);
    expect(savedOrderTracking.installation_date).toBe(orderTrackingData.installation_date);
    expect(savedOrderTracking.status).toBe(orderTrackingData.status);
  });

  it('should not save an order tracking instance without a required field', async () => {
    const orderTrackingData = {
      customer_id: '12345',
      bo_status: 'Ready to ship',
      installation_date: '2023-06-01',
      status: 'Processing'
    };
    const orderTracking = new OrderTracking(orderTrackingData);
    let error;
    try {
      const savedOrderTracking = await orderTracking.save();
      error = savedOrderTracking;
    } catch (err) {
      error = err;
    }
    expect(error).toBeInstanceOf(mongoose.Error.ValidationError);
    expect(error.errors.sales_id).toBeDefined();
  });
});

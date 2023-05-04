const mongoose = require('mongoose');
const Customer = require('../src/models/Customer');

describe('Customer Model', () => {
  beforeAll(async () => {
    await mongoose.connect('mongodb://localhost/test', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
  });

  afterEach(async () => {
    await Customer.deleteMany({});
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  describe('Positive Tests', () => {
    it('Should create and save a customer successfully', async () => {
      const customer = new Customer({
        user_id: '1234',
        first_name: 'xyz',
        last_name: 'abc',
        email_id: 'xyz.abc@example.com',
        contact: '1234567890',
        address: '123 Main St',
        zipcode: '12345',
        country: 'USA',
        state: 'NY',
        county: 'New York',
      });
      const savedCustomer = await customer.save();
      expect(savedCustomer._id).toBeDefined();
      expect(savedCustomer.user_id).toBe('1234');
      expect(savedCustomer.first_name).toBe('xyz');
      expect(savedCustomer.last_name).toBe('abc');
      expect(savedCustomer.email_id).toBe('xyz.abc@example.com');
      expect(savedCustomer.contact).toBe('1234567890');
      expect(savedCustomer.address).toBe('123 Main St');
      expect(savedCustomer.zipcode).toBe('12345');
      expect(savedCustomer.country).toBe('USA');
      expect(savedCustomer.state).toBe('NY');
      expect(savedCustomer.county).toBe('New York');
    });
  });

  describe('Negative Tests', () => {
    it('Should throw validation error for missing required fields', async () => {
      const customer = new Customer({
        user_id: '1234',
        last_name: 'abc',
        email_id: 'xyz.abc@example.com',
        contact: '1234567890',
        address: '123 Main St',
        zipcode: '12345',
        country: 'USA',
        state: 'NY',
        county: 'New York',
      });
      let error;
      try {
        await customer.save();
      } catch (e) {
        error = e;
      }
      expect(error).toBeInstanceOf(mongoose.Error.ValidationError);
      expect(error.errors.first_name).toBeDefined();
    });

    it('Should throw validation error for invalid field types', async () => {
      const customer = new Customer({
        user_id: '1234',
        first_name: 'xyz',
        last_name: 'abc',
        email_id: 'xyz.abc@example.com',
        contact: 1234567890, // should be a string
        address: '123 Main St',
        zipcode: '12345',
        country: 'USA',
        state: 'NY',
        county: 'New York',
      });
      let error;
      try {
        await customer.save();
      } catch (e) {
        error = e;
      }
      expect(error).toBeInstanceOf(mongoose.Error.ValidationError);
      expect(error.errors.contact).toBeDefined();
    });
  });
});
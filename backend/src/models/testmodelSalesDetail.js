const SalesDetail = require('./src/models/SalesDetail');
const mongoose = require('mongoose');

describe('SalesDetailSchema', () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('should save a SalesDetail with valid data', async () => {
    const mockSalesDetail = {
      customer_id: '123456789',
      area: 'New York',
      type_of_installation: 'Roof',
    };

    const savedSalesDetail = await SalesDetail.create(mockSalesDetail);

    expect(savedSalesDetail._id).toBeDefined();
    expect(savedSalesDetail.customer_id).toBe(mockSalesDetail.customer_id);
    expect(savedSalesDetail.area).toBe(mockSalesDetail.area);
    expect(savedSalesDetail.type_of_installation).toBe(mockSalesDetail.type_of_installation);
  });

  test('Create a new Sales Detail', async () => {
    const salesDetail = new SalesDetail({
      customer_id: '1234',
      area: 'New York',
      type_of_installation: 'Residential',
      isAgreement: false,
      grandTotal: '15000',
    });
    const savedSalesDetail = await salesDetail.save();
    expect(savedSalesDetail._id).toBeDefined();
    expect(savedSalesDetail.customer_id).toBe(salesDetail.customer_id);
    expect(savedSalesDetail.area).toBe(salesDetail.area);
    expect(savedSalesDetail.type_of_installation).toBe(salesDetail.type_of_installation);
    expect(savedSalesDetail.isAgreement).toBe(salesDetail.isAgreement);
    expect(savedSalesDetail.grandTotal).toBe(salesDetail.grandTotal);
  });

  test('Update an existing Sales Detail', async () => {
    const salesDetail = new SalesDetail({
      customer_id: '1234',
      area: 'New York',
      type_of_installation: 'Residential',
      isAgreement: false,
      grandTotal: '15000',
    });
    await salesDetail.save();
    salesDetail.area = 'Washington';
    const updatedSalesDetail = await salesDetail.save();
    expect(updatedSalesDetail.area).toBe('Washington');
  });

  test('Create a Sales Detail without required fields', async () => {
    const salesDetail = new SalesDetail({
      type_of_installation: 'Residential',
      isAgreement: false,
      grandTotal: '15000',
    });
    let error;
    try {
      await salesDetail.save();
    } catch (e) {
      error = e;
    }
    expect(error).toBeInstanceOf(mongoose.Error.ValidationError);
    expect(error.errors.customer_id).toBeDefined();
    expect(error.errors.area).toBeDefined();
  });

  test('Create a Sales Detail with invalid data type', async () => {
    const salesDetail = new SalesDetail({
      customer_id: '1234',
      area: 'New York',
      type_of_installation: 'Residential',
      isAgreement: 'false', // string instead of boolean
      grandTotal: '15000',
    });
    let error;
    try {
      await salesDetail.save();
    } catch (e) {
      error = e;
    }
    expect(error).toBeInstanceOf(mongoose.Error.ValidationError);
    expect(error.errors.isAgreement).toBeDefined();
  });

  it('should not save a SalesDetail without a customer_id', async () => {
    const mockSalesDetail = {
      area: 'New York',
      type_of_installation: 'Roof',
    };

    let error = null;
    try {
      await SalesDetail.create(mockSalesDetail);
    } catch (e) {
      error = e;
    }

    expect(error).toBeDefined();
    expect(error.errors.customer_id).toBeDefined();
  });
  
});

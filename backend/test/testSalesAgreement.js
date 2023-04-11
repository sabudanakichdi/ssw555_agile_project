const customer = require('../customerOnboarding/customerOnboarding')

test('Onbaord Customer sucessfully', () => {
    expect(customer.app.post(customerdetails, res)).toBe(HTTPRequest.OK);
});
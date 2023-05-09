import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Payment from './Payment';

describe('Payment form', () => {
  it('should update the card number field when the input changes', () => {
    render(<Payment />);
    const cardNumberInput = screen.getByLabelText('Card Number : ');
    fireEvent.change(cardNumberInput, { target: { value: '1234567890123456' } });
    expect(cardNumberInput).toHaveValue('1234567890123456');
  });

  it('should update the expiry date field when the input changes', () => {
    render(<Payment />);
    const expiryDateInput = screen.getByLabelText('Expiry Date');
    fireEvent.change(expiryDateInput, { target: { value: '2023-05' } });
    expect(expiryDateInput).toHaveValue('2023-05');
  });

  it('should update the cvv field when the input changes', () => {
    render(<Payment />);
    const cvvInput = screen.getByLabelText('CVV');
    fireEvent.change(cvvInput, { target: { value: '123' } });
    expect(cvvInput).toHaveValue('123');
  });

  it('should update the email field when the input changes', () => {
    render(<Payment />);
    const emailInput = screen.getByLabelText('Email Address');
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    expect(emailInput).toHaveValue('test@example.com');
  });

  it('should update the address field when the input changes', () => {
    render(<Payment />);
    const addressInput = screen.getByLabelText('Address');
    fireEvent.change(addressInput, { target: { value: '123 Main St' } });
    expect(addressInput).toHaveValue('123 Main St');
  });

  it('should submit the form when the submit button is clicked', () => {
    render(<Payment />);
    const submitButton = screen.getByText('Submit');
    fireEvent.click(submitButton);
    // Add your own assertion here
  });
});

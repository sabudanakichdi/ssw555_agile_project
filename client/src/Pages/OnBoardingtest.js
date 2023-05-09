import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import OnBoarding from './OnBoarding';

describe('OnBoarding', () => {
  test('renders all input fields', () => {
    render(<OnBoarding />);
    expect(screen.getByLabelText('First Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Last Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Order-id')).toBeInTheDocument();
    expect(screen.getByLabelText('Customer-id')).toBeInTheDocument();
    expect(screen.getByLabelText('Address')).toBeInTheDocument();
    expect(screen.getByLabelText('Contact Number')).toBeInTheDocument();
  });

  test('requires all input fields', () => {
    render(<OnBoarding />);
    fireEvent.submit(screen.getByRole('button', { name: 'Submit' }));
    expect(screen.getByText('First Name is required')).toBeInTheDocument();
    expect(screen.getByText('Last Name is required')).toBeInTheDocument();
    expect(screen.getByText('Order-id is required')).toBeInTheDocument();
    expect(screen.getByText('Customer-id is required')).toBeInTheDocument();
    expect(screen.getByText('Address is required')).toBeInTheDocument();
    expect(screen.getByText('Contact Number is required')).toBeInTheDocument();
  });

  test('submits the form when all input fields are filled', () => {
    const handleSubmit = jest.fn();
    render(<OnBoarding onSubmit={handleSubmit} />);
    fireEvent.change(screen.getByLabelText('First Name'), {
      target: { value: 'John' },
    });
    fireEvent.change(screen.getByLabelText('Last Name'), {
      target: { value: 'Doe' },
    });
    fireEvent.change(screen.getByLabelText('Order-id'), {
      target: { value: '12345' },
    });
    fireEvent.change(screen.getByLabelText('Customer-id'), {
      target: { value: '67890' },
    });
    fireEvent.change(screen.getByLabelText('Address'), {
      target: { value: '123 Main St' },
    });
    fireEvent.change(screen.getByLabelText('Contact Number'), {
      target: { value: '555-555-5555' },
    });
    fireEvent.submit(screen.getByRole('button', { name: 'Submit' }));
    expect(handleSubmit).toHaveBeenCalledWith({
      firstName: 'John',
      lastName: 'Doe',
      orderId: '12345',
      customerId: '67890',
      address: '123 Main St',
      contactNumber: '555-555-5555',
    });
  });
});

import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import ContactUs from './ContactUs';

describe('ContactUs', () => {
  it('renders the form correctly', () => {
    render(<ContactUs />);

    expect(screen.getByLabelText('First Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Last Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Company')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Phone Number')).toBeInTheDocument();
    expect(screen.getByLabelText('Message')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Let\'s Talk' })).toBeInTheDocument();
  });

  it('submits the form with valid data', () => {
    const mockSubmit = jest.fn();
    render(<ContactUs onSubmit={mockSubmit} />);

    fireEvent.change(screen.getByLabelText('First Name'), { target: { value: 'John' } });
    fireEvent.change(screen.getByLabelText('Last Name'), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByLabelText('Company'), { target: { value: 'ACME Inc.' } });
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'john.doe@example.com' } });
    fireEvent.change(screen.getByLabelText('Phone Number'), { target: { value: '1234567890' } });
    fireEvent.change(screen.getByLabelText('Message'), { target: { value: 'Hello, I\'m interested in your product' } });
    fireEvent.click(screen.getByRole('button', { name: 'Let\'s Talk' }));

    expect(mockSubmit).toHaveBeenCalledTimes(1);
    expect(mockSubmit).toHaveBeenCalledWith({
      firstName: 'John',
      lastName: 'Doe',
      company: 'ACME Inc.',
      email: 'john.doe@example.com',
      phoneNumber: '1234567890',
      message: 'Hello, I\'m interested in your product',
    });
  });

  it('shows an error message for missing required fields', () => {
    const mockSubmit = jest.fn();
    render(<ContactUs onSubmit={mockSubmit} />);

    fireEvent.click(screen.getByRole('button', { name: 'Let\'s Talk' }));

    expect(mockSubmit).not.toHaveBeenCalled();
    expect(screen.getByText('Please fill out this field.')).toBeInTheDocument();
  });
});

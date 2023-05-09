import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Signup from './Signup';

describe('Signup', () => {
  it('renders the Sign Up heading', () => {
    const { getByText } = render(<Signup />);
    expect(getByText('Sign Up')).toBeInTheDocument();
  });

  it('submits the form with valid input', () => {
    const { getByLabelText, getByText } = render(<Signup />);

    fireEvent.change(getByLabelText('Email address'), {
      target: { value: 'test@example.com' },
    });

    fireEvent.change(getByLabelText('Phone Number'), {
      target: { value: '1234567890' },
    });

    fireEvent.change(getByLabelText('Password'), {
      target: { value: 'password' },
    });

    fireEvent.click(getByText('Sign Up'));

    // add assertions to verify the submission was successful
  });

  it('displays an error message with invalid input', () => {
    const { getByLabelText, getByText } = render(<Signup />);

    fireEvent.change(getByLabelText('Email address'), {
      target: { value: 'invalid email' },
    });

    fireEvent.change(getByLabelText('Phone Number'), {
      target: { value: 'not a number' },
    });

    fireEvent.change(getByLabelText('Password'), {
      target: { value: 'short' },
    });

    fireEvent.click(getByText('Sign Up'));

    expect(getByText('Please enter a valid email address')).toBeInTheDocument();
    expect(getByText('Please enter a valid phone number')).toBeInTheDocument();
    expect(getByText('Password must be at least 8 characters long')).toBeInTheDocument();
  });
});

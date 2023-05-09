import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Login from './Login';

test('renders the Login component', () => {
  render(<Login />);
});

test('form submits with valid input', () => {
  const { getByLabelText, getByText } = render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  );

  // Fill out form inputs
  fireEvent.change(getByLabelText('Email address'), {
    target: { value: 'user@example.com' }
  });
  fireEvent.change(getByLabelText('Password'), {
    target: { value: 'password123' }
  });

  // Submit form
  fireEvent.click(getByText('Sign in'));

  // Expect successful form submission
  expect(getByText('Login')).toBeInTheDocument();
});

test('displays the sign-up link', () => {
  const { getByText } = render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  );

  expect(getByText('Sign Up Here')).toBeInTheDocument();
});

test('clicking sign-up link navigates to sign-up page', () => {
  const { getByText } = render(
    <MemoryRouter>
      <Login />

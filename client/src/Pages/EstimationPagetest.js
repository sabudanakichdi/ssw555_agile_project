import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import EstimationPage from './EstimationPage';

test('should display the Estimation heading', () => {
  const { getByText } = render(<EstimationPage />);
  const heading = getByText(/Estimation/);
  expect(heading).toBeInTheDocument();
});

test('should have a checkbox with terms and conditions', () => {
  const { getByLabelText } = render(<EstimationPage />);
  const checkbox = getByLabelText(/I agree to the terms and conditions/);
  expect(checkbox).toBeInTheDocument();
});

test('should enable the continue button on checking the checkbox', () => {
  const { getByLabelText, getByText } = render(<EstimationPage />);
  const checkbox = getByLabelText(/I agree to the terms and conditions/);
  const continueButton = getByText(/Continue/);
  fireEvent.click(checkbox);
  expect(continueButton).toBeEnabled();
});

test('should disable the continue button on unchecking the checkbox', () => {
  const { getByLabelText, getByText } = render(<EstimationPage />);
  const checkbox = getByLabelText(/I agree to the terms and conditions/);
  const continueButton = getByText(/Continue/);
  fireEvent.click(checkbox);
  fireEvent.click(checkbox);
  expect(continueButton).toBeDisabled();
});

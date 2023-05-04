import React from "react";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/react";
import Tracking from "./Tracking";
import userEvent from "@testing-library/user-event";

test("renders Tracking component without crashing", () => {
  render(<Tracking />);
});
test('the "Track" button is clickable', () => {
  render(<Tracking />);
  const trackButton = screen.getByRole("button", { name: /track/i });
  userEvent.click(trackButton);
});
test('the "Enter Order Id" input field is required', () => {
  render(<Tracking />);
  const orderIdInput = screen.getByLabelText(/enter order id/i);
  expect(orderIdInput).toBeRequired();
});
test('the "Enter Tracking Number" input field is required', () => {
  render(<Tracking />);
  const trackingNumberInput = screen.getByLabelText(/enter tracking number/i);
  expect(trackingNumberInput).toBeRequired();
});
test('the "Desired delivery date" input field updates the state when changed', () => {
  render(<Tracking />);
  const deliveryDateInput = screen.getByLabelText(/desired delivery date/i);
  userEvent.type(deliveryDateInput, "2023-05-10");
  expect(deliveryDateInput).toHaveValue("2023-05-10");
});

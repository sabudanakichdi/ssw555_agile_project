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

test('renders the correct tracking information after clicking "Track"', async () => {
  render(<Tracking />);
  const orderIdInput = screen.getByLabelText(/enter order id/i);
  const trackingNumberInput = screen.getByLabelText(/enter tracking number/i);
  const trackButton = screen.getByRole("button", { name: /track/i });
  const expectedDeliveryDate = "2023-05-10";
  userEvent.type(orderIdInput, "12345");
  userEvent.type(trackingNumberInput, "67890");
  userEvent.type(
    screen.getByLabelText(/desired delivery date/i),
    expectedDeliveryDate
  );
  userEvent.click(trackButton);
  const trackingInfo = await screen.findByText(/tracking information/i);
  expect(trackingInfo).toBeInTheDocument();
  expect(screen.getByText(/order id: 12345/i)).toBeInTheDocument();
  expect(screen.getByText(/tracking number: 67890/i)).toBeInTheDocument();
  expect(
    screen.getByText(`desired delivery date: ${expectedDeliveryDate}`)
  ).toBeInTheDocument();
});

test('displays an error message when "Track" is clicked with incomplete form data', async () => {
  render(<Tracking />);
  const trackButton = screen.getByRole("button", { name: /track/i });
  userEvent.click(trackButton);
  const errorMessage = await screen.findByText(
    /please enter all required fields/i
  );
  expect(errorMessage).toBeInTheDocument();
});

test("displays an error message when an invalid delivery date is entered", async () => {
  render(<Tracking />);
  const deliveryDateInput = screen.getByLabelText(/desired delivery date/i);
  userEvent.type(deliveryDateInput, "invalid-date");
  const trackButton = screen.getByRole("button", { name: /track/i });
  userEvent.click(trackButton);
  const errorMessage = await screen.findByText(
    /please enter a valid delivery date/i
  );
  expect(errorMessage).toBeInTheDocument();
});

test("displays an error message when tracking information cannot be found", async () => {
  // mock API call to return error response
  const mockApiCall = jest
    .fn()
    .mockRejectedValue({ message: "Tracking information not found" });
  jest.mock("./api", () => ({
    trackPackage: mockApiCall,
  }));
  render(<Tracking />);
  const orderIdInput = screen.getByLabelText(/enter order id/i);
  const trackingNumberInput = screen.getByLabelText(/enter tracking number/i);
  const trackButton = screen.getByRole("button", { name: /track/i });
  userEvent.type(orderIdInput, "12345");
  userEvent.type(trackingNumberInput, "67890");
  userEvent.type(screen.getByLabelText(/desired delivery date/i), "2023-05-10");
  userEvent.click(trackButton);
  const errorMessage = await screen.findByText(
    /tracking information not found/i
  );
  expect(errorMessage).toBeInTheDocument();
});

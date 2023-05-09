import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Tracking from "./Tracking";

describe("Tracking component", () => {
  test("renders Order Summary header", () => {
    render(<Tracking />);
    const headerElement = screen.getByText("Order Summary:");
    expect(headerElement).toBeInTheDocument();
  });

  test("renders Delivery Date label and input", () => {
    render(<Tracking />);
    const labelElement = screen.getByLabelText("Desired delivery date:");
    expect(labelElement).toBeInTheDocument();
    const inputElement = screen.getByRole("textbox", { name: "deliveryDate" });
    expect(inputElement).toBeInTheDocument();
  });

  test("updates delivery date on input change", () => {
    render(<Tracking />);
    const inputElement = screen.getByRole("textbox", { name: "deliveryDate" });
    fireEvent.change(inputElement, { target: { value: "2023-05-10" } });
    expect(inputElement.value).toBe("2023-05-10");
  });
});
test('renders Order Summary heading', () => {
  render(<Tracking />);
  const orderSummaryHeading = screen.getByText(/Order Summary:/i);
  expect(orderSummaryHeading).toBeInTheDocument();
});
test('renders Desired delivery date label', () => {
  render(<Tracking />);
  const deliveryDateLabel = screen.getByLabelText(/Desired delivery date:/i);
  expect(deliveryDateLabel).toBeInTheDocument();
});
test('updates deliveryDate state when input value changes', () => {
  render(<Tracking />);
  const input = screen.getByLabelText(/Desired delivery date:/i);
  fireEvent.change(input, { target: { value: '2023-05-10' } });
  expect(input).toHaveValue('2023-05-10');
});
test('calls handleDeliveryDateChange function when input value changes', () => {
  const handleDeliveryDateChange = jest.fn();
  render(<Tracking handleDeliveryDateChange={handleDeliveryDateChange} />);
  const input = screen.getByLabelText(/Desired delivery date:/i);
  fireEvent.change(input, { target: { value: '2023-05-10' } });
  expect(handleDeliveryDateChange).toHaveBeenCalledTimes(1);
});
test('sets input value prop to deliveryDate state', () => {
  render(<Tracking />);
  const input = screen.getByLabelText(/Desired delivery date:/i);
  fireEvent.change(input, { target: { value: '2023-05-10' } });
  expect(input).toHaveValue('2023-05-10');
});

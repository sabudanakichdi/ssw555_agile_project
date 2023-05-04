import React from "react";
import { render, fireEvent, getByLabelText } from "@testing-library/react";
import Payment from "./Payment";

describe("Payment", () => {
  it("renders without crashing", () => {
    const { getByText } = render(<Payment />);
    expect(getByText("Card Number :")).toBeInTheDocument();
  });

  it("updates the card number state when a value is entered", () => {
    const { getByLabelText } = render(<Payment />);
    const cardNumberInput = getByLabelText("Card Number :");
    fireEvent.change(cardNumberInput, {
      target: { value: "1234 5678 9012 3456" },
    });
    expect(cardNumberInput.value).toBe("1234 5678 9012 3456");
  });

  it("updates the expiry date state when a value is entered", () => {
    const { getByLabelText } = render(<Payment />);
    const expiryDateInput = getByLabelText("Expiry Date");
    fireEvent.change(expiryDateInput, { target: { value: "2025-12-31" } });
    expect(expiryDateInput.value).toBe("2025-12-31");
  });

  it("updates the CVV state when a value is entered", () => {
    const { getByLabelText } = render(<Payment />);
    const cvvInput = getByLabelText("CVV");
    fireEvent.change(cvvInput, { target: { value: "123" } });
    expect(cvvInput.value).toBe("123");
  });

  it("calls the form submission function when the submit button is clicked", () => {
    const handleSubmit = jest.fn();
    const { getByRole } = render(<Payment onSubmit={handleSubmit} />);
    const submitButton = getByRole("button", { name: /submit/i });
    fireEvent.click(submitButton);
    expect(handleSubmit).toHaveBeenCalled();
  });
});

it("disables the submit button initially and enables it when all fields are filled in correctly", () => {
  const { getByRole } = render(<Payment />);
  const submitButton = getByRole("button", { name: /submit/i });
  expect(submitButton.disabled).toBe(true);

  const cardNumberInput = getByLabelText("Card Number :");
  fireEvent.change(cardNumberInput, {
    target: { value: "1234 5678 9012 3456" },
  });

  const expiryDateInput = getByLabelText("Expiry Date");
  fireEvent.change(expiryDateInput, { target: { value: "2025-12-31" } });

  const cvvInput = getByLabelText("CVV");
  fireEvent.change(cvvInput, { target: { value: "123" } });

  expect(submitButton.disabled).toBe(false);
});

it("displays an error message if an invalid card number is entered", () => {
  const { getByLabelText, getByText } = render(<Payment />);
  const cardNumberInput = getByLabelText("Card Number :");
  fireEvent.change(cardNumberInput, {
    target: { value: "1234 5678 90" },
  });
  expect(getByText("Invalid card number")).toBeInTheDocument();
});

it("displays an error message if an invalid expiry date is entered", () => {
  const { getByLabelText, getByText } = render(<Payment />);
  const expiryDateInput = getByLabelText("Expiry Date");
  fireEvent.change(expiryDateInput, { target: { value: "2020-01-01" } });
  expect(getByText("Invalid expiry date")).toBeInTheDocument();
});

it("displays an error message if an invalid CVV is entered", () => {
  const { getByLabelText, getByText } = render(<Payment />);
  const cvvInput = getByLabelText("CVV");
  fireEvent.change(cvvInput, { target: { value: "12" } });
  expect(getByText("Invalid CVV")).toBeInTheDocument();
});

it("clears the form after successful submission", () => {
  const handleSubmit = jest.fn();
  const { getByRole, getByLabelText } = render(
    <Payment onSubmit={handleSubmit} />
  );

  const cardNumberInput = getByLabelText("Card Number :");
  fireEvent.change(cardNumberInput, {
    target: { value: "1234 5678 9012 3456" },
  });

  const expiryDateInput = getByLabelText("Expiry Date");
  fireEvent.change(expiryDateInput, { target: { value: "2025-12-31" } });

  const cvvInput = getByLabelText("CVV");
  fireEvent.change(cvvInput, { target: { value: "123" } });

  const submitButton = getByRole("button", { name: /submit/i });
  fireEvent.click(submitButton);

  expect(handleSubmit).toHaveBeenCalled();
  expect(cardNumberInput.value).toBe("");
  expect(expiryDateInput.value).toBe("");
  expect(cvvInput.value).toBe("");
});

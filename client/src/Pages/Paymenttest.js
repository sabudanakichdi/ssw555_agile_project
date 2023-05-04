import React from "react";
import { render, fireEvent } from "@testing-library/react";
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

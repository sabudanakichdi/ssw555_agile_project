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

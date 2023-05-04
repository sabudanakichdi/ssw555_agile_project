import OnBoarding from "./OnBoarding";
import React from "react";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/react";
import { fireEvent } from "@testing-library/react";

test("renders OnBoarding without crashing", () => {
  render(<OnBoarding />);
});
test("OnBoarding form contains correct input fields", () => {
  render(<OnBoarding />);
  expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Last Name/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Address/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Size/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Installation Type/i)).toBeInTheDocument();
});
test("OnBoarding form requires all input fields", async () => {
  render(<OnBoarding />);
  const submitButton = screen.getByText(/submit/i);
  fireEvent.click(submitButton);
  expect(await screen.findAllByRole("alert")).toHaveLength(5); // assumes there are 5 required input fields
});
test("OnBoarding input fields accept user input", () => {
  render(<OnBoarding />);
  const firstNameInput = screen.getByLabelText(/First Name/i);
  const lastNameInput = screen.getByLabelText(/Last Name/i);
  const addressInput = screen.getByLabelText(/Address/i);
  const sizeInput = screen.getByLabelText(/Size/i);
  const radioInput = screen.getByLabelText(/Installation Type/i);

  fireEvent.change(firstNameInput, { target: { value: "John" } });
  fireEvent.change(lastNameInput, { target: { value: "Doe" } });
  fireEvent.change(addressInput, { target: { value: "123 Main St" } });
  fireEvent.change(sizeInput, { target: { value: "10" } });
  fireEvent.click(radioInput);

  expect(firstNameInput.value).toBe("John");
  expect(lastNameInput.value).toBe("Doe");
  expect(addressInput.value).toBe("123 Main St");
  expect(sizeInput.value).toBe("10");
  expect(radioInput.checked).toBe(true);
});
test("OnBoarding form submission works correctly", async () => {
  render(<OnBoarding />);
  const firstNameInput = screen.getByLabelText(/First Name/i);
  const lastNameInput = screen.getByLabelText(/Last Name/i);
  const addressInput = screen.getByLabelText(/Address/i);
  const sizeInput = screen.getByLabelText(/Size/i);
  const submitButton = screen.getByText(/submit/i);

  fireEvent.change(firstNameInput, { target: { value: "John" } });
  fireEvent.change(lastNameInput, { target: { value: "Doe" } });
  fireEvent.change(addressInput, { target: { value: "123 Main St" } });
  fireEvent.change(sizeInput, { target: { value: "10" } });

  fireEvent.click(submitButton);
  const alerts = await screen.findAllByRole("alert");
  expect(alerts).toHaveLength(0); // no alerts means form submission was successful
});

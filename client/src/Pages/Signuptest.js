import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { screen } from "@testing-library/react";
import Signup from "./Signup";
const mockSubmitFunction = jest.fn();

it("renders the email input field", () => {
  render(<Signup />);
  const emailInput = screen.getByLabelText("Email address");
  expect(emailInput).toBeInTheDocument();
  expect(emailInput).toHaveAttribute("type", "email");
  expect(emailInput).toHaveAttribute("name", "email");
});
it("renders the phone number input field", () => {
  render(<Signup />);
  const phoneInput = screen.getByLabelText("Phone Number");
  expect(phoneInput).toBeInTheDocument();
  expect(phoneInput).toHaveAttribute("type", "number");
  expect(phoneInput).toHaveAttribute("name", "phone");
});
it("renders the password input field", () => {
  render(<Signup />);
  const passwordInput = screen.getByLabelText("Password");
  expect(passwordInput).toBeInTheDocument();
  expect(passwordInput).toHaveAttribute("type", "password");
  expect(passwordInput).toHaveAttribute("name", "password");
});
it("renders the Sign Up button", () => {
  render(<Signup />);
  const signUpButton = screen.getByText("Sign Up");
  expect(signUpButton).toBeInTheDocument();
  expect(signUpButton).toHaveAttribute("type", "submit");
});
it("submits the form with user data", async () => {
  render(<Signup />);
  const emailInput = screen.getByLabelText("Email address");
  const phoneInput = screen.getByLabelText("Phone Number");
  const passwordInput = screen.getByLabelText("Password");
  const signUpButton = screen.getByText("Sign Up");

  const email = "test@example.com";
  const phone = "1234567890";
  const password = "password123";

  fireEvent.change(emailInput, { target: { value: email } });
  fireEvent.change(phoneInput, { target: { value: phone } });
  fireEvent.change(passwordInput, { target: { value: password } });

  fireEvent.click(signUpButton);

  // Use mock function or other means to verify form submission behavior
  expect(mockSubmitFunction).toHaveBeenCalledWith({ email, phone, password });
});

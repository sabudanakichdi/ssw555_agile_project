import { render } from "@testing-library/react";
import Login from "./Login";
import { screen } from "@testing-library/react";

test("renders Login component without errors", () => {
  render(<Login />);
});

test("renders Login component without errors", () => {
  render(<Login />);
});

test("renders email input field correctly", () => {
  render(<Login />);
  const emailInput = screen.getByLabelText(/email address/i);
  expect(emailInput).toBeInTheDocument();
  expect(emailInput).toHaveAttribute("type", "email");
});

test("renders password input field correctly", () => {
  render(<Login />);
  const passwordInput = screen.getByLabelText(/password/i);
  expect(passwordInput).toBeInTheDocument();
  expect(passwordInput).toHaveAttribute("type", "password");
});

test("renders sign in button correctly", () => {
  render(<Login />);
  const signInButton = screen.getByRole("button", { name: /sign in/i });
  expect(signInButton).toBeInTheDocument();
});

test("renders link to Signup page correctly", () => {
  render(<Login />);
  const signUpLink = screen.getByRole("link", { name: /sign up here/i });
  expect(signUpLink).toBeInTheDocument();
  expect(signUpLink).toHaveAttribute("href", "/Signup");
});

test("renders email input field correctly", () => {
  render(<Login />);
  const emailInput = screen.getByLabelText(/email address/i);
  expect(emailInput).toBeInTheDocument();
  expect(emailInput).toHaveAttribute("type", "email");
});

test("renders password input field correctly", () => {
  render(<Login />);
  const passwordInput = screen.getByLabelText(/password/i);
  expect(passwordInput).toBeInTheDocument();
  expect(passwordInput).toHaveAttribute("type", "password");
});

test("renders sign in button correctly", () => {
  render(<Login />);
  const signInButton = screen.getByRole("button", { name: /sign in/i });
  expect(signInButton).toBeInTheDocument();
});

test("renders link to Signup page correctly", () => {
  render(<Login />);
  const signUpLink = screen.getByRole("link", { name: /sign up here/i });
  expect(signUpLink).toBeInTheDocument();
  expect(signUpLink).toHaveAttribute("href", "/Signup");
});

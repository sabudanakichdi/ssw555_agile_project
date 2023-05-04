import { render } from "@testing-library/react";
import Login from "./Login";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

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

test("email input field is empty by default", () => {
  render(<Login />);
  const emailInput = screen.getByLabelText(/email address/i);
  expect(emailInput.value).toBe("");
});

test("password input field is empty by default", () => {
  render(<Login />);
  const passwordInput = screen.getByLabelText(/password/i);
  expect(passwordInput.value).toBe("");
});

test("email input field updates correctly", () => {
  render(<Login />);
  const emailInput = screen.getByLabelText(/email address/i);
  const testEmail = "test@example.com";
  userEvent.type(emailInput, testEmail);
  expect(emailInput.value).toBe(testEmail);
});

test("password input field updates correctly", () => {
  render(<Login />);
  const passwordInput = screen.getByLabelText(/password/i);
  const testPassword = "password123";
  userEvent.type(passwordInput, testPassword);
  expect(passwordInput.value).toBe(testPassword);
});

test("sign in button is disabled when email and/or password fields are empty", () => {
  render(<Login />);
  const emailInput = screen.getByLabelText(/email address/i);
  const passwordInput = screen.getByLabelText(/password/i);
  const signInButton = screen.getByRole("button", { name: /sign in/i });
  expect(signInButton).toBeDisabled();
  userEvent.type(emailInput, "test@example.com");
  expect(signInButton).toBeDisabled();
  userEvent.type(passwordInput, "password123");
  expect(signInButton).toBeEnabled();
});

test("clicking sign in button triggers login request", async () => {
  const mockLogin = jest.fn();
  render(<Login onLogin={mockLogin} />);
  const emailInput = screen.getByLabelText(/email address/i);
  const passwordInput = screen.getByLabelText(/password/i);
  const signInButton = screen.getByRole("button", { name: /sign in/i });
  userEvent.type(emailInput, "test@example.com");
  userEvent.type(passwordInput, "password123");
  userEvent.click(signInButton);
  expect(mockLogin).toHaveBeenCalledWith({
    email: "test@example.com",
    password: "password123",
  });
});

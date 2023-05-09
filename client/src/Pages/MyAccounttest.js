import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import MyAccount from "./MyAccount";

test("renders My Account heading", () => {
  render(<MyAccount />);
  const heading = screen.getByText("My Account");
  expect(heading).toBeInTheDocument();
});

test("renders email input", () => {
  render(<MyAccount />);
  const emailInput = screen.getByLabelText("Email address");
  expect(emailInput).toBeInTheDocument();
});

test("renders password input", () => {
  render(<MyAccount />);
  const passwordInput = screen.getByLabelText("Password");
  expect(passwordInput).toBeInTheDocument();
});

test("renders sign in button", () => {
  render(<MyAccount />);
  const signInButton = screen.getByRole("button", { name: "Sign in" });
  expect(signInButton).toBeInTheDocument();
});

test("clicking Sign Up Here link navigates to Signup page", () => {
  render(
    <MemoryRouter>
      <MyAccount />
    </MemoryRouter>
  );
  const signUpLink = screen.getByRole("link", { name: "Sign Up Here" });
  userEvent.click(signUpLink);
  const signupHeading = screen.getByText("Sign Up");
  expect(signupHeading).toBeInTheDocument();
});

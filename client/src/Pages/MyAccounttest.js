import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import MyAccount from "./MyAccount";

test("renders MyAccount component without crashing", () => {
  render(
    <Router>
      <MyAccount />
    </Router>
  );
});

test("contains an input element for the email field", () => {
  const { getByLabelText } = render(
    <Router>
      <MyAccount />
    </Router>
  );
  expect(getByLabelText("Email address")).toBeInTheDocument();
});

test("contains an input element for the password field", () => {
  const { getByLabelText } = render(
    <Router>
      <MyAccount />
    </Router>
  );
  expect(getByLabelText("Password")).toBeInTheDocument();
});

test("contains a link to the Signup page", () => {
  const { getByText } = render(
    <Router>
      <MyAccount />
    </Router>
  );
  expect(getByText("Sign Up Here")).toHaveAttribute("href", "/Signup");
});

test("clicking Sign in button triggers a submit event", () => {
  const { getByText } = render(
    <Router>
      <MyAccount />
    </Router>
  );
  const signInButton = getByText("Sign in");
  fireEvent.click(signInButton);
  expect(signInButton).toHaveAttribute("type", "submit");
});

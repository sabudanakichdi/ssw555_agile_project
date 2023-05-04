import React from "react";
import { render } from "@testing-library/react";
import EstimationPage from "./EstimationPage";
import { fireEvent } from "@testing-library/react";
import { MemoryRouter, Route } from "react-router-dom";
import CustomerOnBoardingPage from "./CustomerOnBoardingPage";

test("renders component without crashing", () => {
  render(<EstimationPage />);
});

test("checkbox starts unchecked", () => {
  const { getByLabelText } = render(<EstimationPage />);
  const checkbox = getByLabelText(/I agree to the terms and conditions/i);
  expect(checkbox.checked).toBe(false);
});

test("clicking checkbox sets agreed state to true", () => {
  const { getByLabelText } = render(<EstimationPage />);
  const checkbox = getByLabelText(/I agree to the terms and conditions/i);
  fireEvent.click(checkbox);
  expect(checkbox.checked).toBe(true);
});

test("clicking disagree button sets agreed state to false", () => {
  const { getByLabelText, getByText } = render(<EstimationPage />);
  const checkbox = getByLabelText(/I agree to the terms and conditions/i);
  fireEvent.click(checkbox);
  const disagreeButton = getByText(/disagree/i);
  fireEvent.click(disagreeButton);
  expect(checkbox.checked).toBe(false);
});

test("clicking continue button navigates to customer onboarding page", () => {
  const { getByLabelText, getByText } = render(
    <MemoryRouter initialEntries={["/estimation"]}>
      <Route exact path="/estimation" component={EstimationPage} />
      <Route
        exact
        path="/CustomerOnBoardingPage"
        component={CustomerOnBoardingPage}
      />
    </MemoryRouter>
  );
  const checkbox = getByLabelText(/I agree to the terms and conditions/i);
  fireEvent.click(checkbox);
  const continueButton = getByText(/continue/i);
  fireEvent.click(continueButton);
  expect(window.location.pathname).toBe("/CustomerOnBoardingPage");
});

test("checkbox label contains link to terms and conditions", () => {
  const { getByText } = render(<EstimationPage />);
  const checkboxLabel = getByText(/I agree to the/);
  expect(checkboxLabel).toContainElement(getByText(/terms and conditions/i));
});

test("continue button is disabled when checkbox is unchecked", () => {
  const { getByLabelText, getByText } = render(<EstimationPage />);
  const checkbox = getByLabelText(/I agree to the terms and conditions/i);
  const continueButton = getByText(/continue/i);
  expect(continueButton).toBeDisabled();
  fireEvent.click(checkbox);
  expect(continueButton).toBeEnabled();
});

test("customer's agreed state is passed to customer onboarding page", () => {
  const { getByLabelText, getByText } = render(
    <MemoryRouter initialEntries={["/estimation"]}>
      <Route exact path="/estimation" component={EstimationPage} />
      <Route
        exact
        path="/CustomerOnBoardingPage"
        component={CustomerOnBoardingPage}
      />
    </MemoryRouter>
  );
  const checkbox = getByLabelText(/I agree to the terms and conditions/i);
  fireEvent.click(checkbox);
  const continueButton = getByText(/continue/i);
  fireEvent.click(continueButton);
  const onboardingPage = getByText(/customer onboarding page/i);
  expect(onboardingPage).toBeInTheDocument();
  const agreedState = getByText(/agreed: true/i);
  expect(agreedState).toBeInTheDocument();
});

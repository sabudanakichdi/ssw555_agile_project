import Agreement from "./Agreement";
import { render, fireEvent, screen } from "@testing-library/react";

test("renders Agreement component without crashing", () => {
  render(<Agreement />);
});

test("initial value of agreed is false", () => {
  render(<Agreement />);
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("clicking Agree checkbox updates state to true", () => {
  render(<Agreement />);
  const checkbox = screen.getByRole("checkbox");
  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();
});

test("Continue button is rendered and clickable when Agree checkbox is checked", () => {
  render(<Agreement />);
  const checkbox = screen.getByRole("checkbox");
  fireEvent.click(checkbox);
  const continueButton = screen.getByRole("link", { name: /Continue/i });
  expect(continueButton).toBeInTheDocument();
  fireEvent.click(continueButton);
  // add assertions for what should happen when the button is clicked
});

test("Disagree button is rendered and clickable when Agree checkbox is checked", () => {
  render(<Agreement />);
  const checkbox = screen.getByRole("checkbox");
  fireEvent.click(checkbox);
  const disagreeButton = screen.getByRole("button", { name: /Disagree/i });
  expect(disagreeButton).toBeInTheDocument();
  fireEvent.click(disagreeButton);
  // add assertions for what should happen when the button is clicked
});

test("renders the correct text", () => {
  render(<Agreement />);
  expect(
    screen.getByText("I agree to the terms and conditions.")
  ).toBeInTheDocument();
});

test("displays an error message when 'Continue' is clicked without checking the checkbox", () => {
  render(<Agreement />);
  const continueButton = screen.getByRole("link", { name: /Continue/i });
  fireEvent.click(continueButton);
  expect(
    screen.getByText("Please agree to the terms and conditions.")
  ).toBeInTheDocument();
});

test("displays a success message when 'Continue' is clicked after checking the checkbox", () => {
  render(<Agreement />);
  const checkbox = screen.getByRole("checkbox");
  const continueButton = screen.getByRole("link", { name: /Continue/i });
  fireEvent.click(checkbox);
  fireEvent.click(continueButton);
  expect(
    screen.getByText("Thanks for agreeing to the terms and conditions!")
  ).toBeInTheDocument();
});

test("displays a message when 'Disagree' is clicked", () => {
  render(<Agreement />);
  const checkbox = screen.getByRole("checkbox");
  const disagreeButton = screen.getByRole("button", { name: /Disagree/i });
  fireEvent.click(checkbox);
  fireEvent.click(disagreeButton);
  expect(
    screen.getByText(
      "Sorry, you cannot proceed without agreeing to the terms and conditions."
    )
  ).toBeInTheDocument();
});

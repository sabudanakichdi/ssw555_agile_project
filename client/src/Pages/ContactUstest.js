import { render } from "@testing-library/react";
import ContactUs from "./ContactUs";
import { fireEvent } from "@testing-library/react";
test("renders ContactUs component without crashing", () => {
  render(<ContactUs />);
});
test('renders "Contact Sales" header', () => {
  const { getByText } = render(<ContactUs />);
  const headerElement = getByText(/Contact Sales/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders "Let\'s Talk" button', () => {
  const { getByRole } = render(<ContactUs />);
  const buttonElement = getByRole("button", { name: /Let's Talk/i });
  expect(buttonElement).toBeInTheDocument();
});

test("renders all required input fields", () => {
  const { getByLabelText } = render(<ContactUs />);
  const firstNameElement = getByLabelText(/First Name/i);
  const lastNameElement = getByLabelText(/Last Name/i);
  const companyElement = getByLabelText(/Company/i);
  const emailElement = getByLabelText(/Email/i);
  const phoneElement = getByLabelText(/Phone Number/i);
  const messageElement = getByLabelText(/Message/i);

  expect(firstNameElement).toBeInTheDocument();
  expect(lastNameElement).toBeInTheDocument();
  expect(companyElement).toBeInTheDocument();
  expect(emailElement).toBeInTheDocument();
  expect(phoneElement).toBeInTheDocument();
  expect(messageElement).toBeInTheDocument();
});

test('disables "Let\'s Talk" button when required fields are empty', () => {
  const { getByRole } = render(<ContactUs />);
  const buttonElement = getByRole("button", { name: /Let's Talk/i });

  expect(buttonElement).toBeDisabled();

  const firstNameElement = getByRole("textbox", { name: /First Name/i });
  fireEvent.change(firstNameElement, { target: { value: "John" } });

  expect(buttonElement).toBeDisabled();

  const lastNameElement = getByRole("textbox", { name: /Last Name/i });
  fireEvent.change(lastNameElement, { target: { value: "Doe" } });

  expect(buttonElement).toBeDisabled();

  const companyElement = getByRole("textbox", { name: /Company/i });
  fireEvent.change(companyElement, { target: { value: "Acme Inc." } });

  expect(buttonElement).toBeDisabled();

  const emailElement = getByRole("textbox", { name: /Email/i });
  fireEvent.change(emailElement, { target: { value: "john.doe@acme.com" } });

  expect(buttonElement).toBeDisabled();

  const phoneElement = getByRole("textbox", { name: /Phone Number/i });
  fireEvent.change(phoneElement, { target: { value: "1234567890" } });

  expect(buttonElement).toBeDisabled();

  const messageElement = getByRole("textbox", { name: /Message/i });
  fireEvent.change(messageElement, { target: { value: "Hello world!" } });
});

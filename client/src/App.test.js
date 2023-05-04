import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

describe("App component", () => {
  test("renders learn react link", () => {
    const { getByText } = render(
      <Router>
        <App />
      </Router>
    );
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const linkElement = getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
});

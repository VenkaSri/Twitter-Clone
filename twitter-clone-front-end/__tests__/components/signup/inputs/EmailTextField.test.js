import React from "react";
import {
  render,
  fireEvent,
  act,
  screen,
  waitFor,
} from "@testing-library/react";
import EmailTextField from "../../../../src/components/signup/inputs/EmailTextField"; // Update the import to match your file structure
import { Provider } from "react-redux";
import store from "../../../../src/state/"; // Update the import to match your file structure
import userEvent from "@testing-library/user-event";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";

// Mock the store if needed, this is just a placeholder
// import your real store

// test("dummy test", () => {
//   expect(true).toBe(true);
// });

const mock = new MockAdapter(axios);

describe("EmailTextField Component", () => {
  it("renders correctly", () => {
    render(
      <Provider store={store}>
        <EmailTextField />
      </Provider>
    );
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
  });

  it("handles user input correctly", async () => {
    render(
      <Provider store={store}>
        <EmailTextField />
      </Provider>
    );
    const input = screen.getByLabelText("Email");
    await userEvent.type(input, "test@test.com");
    expect(input).toHaveValue("test@test.com");
  });

  it("displays error for invalid email format", async () => {
    render(
      <Provider store={store}>
        <EmailTextField />
      </Provider>
    );
    const input = screen.getByLabelText("Email");
    await userEvent.type(input, "invalidEmail");
    await waitFor(() => {
      expect(
        screen.getByText("Please enter a valid email.")
      ).toBeInTheDocument();
    });
  });
});

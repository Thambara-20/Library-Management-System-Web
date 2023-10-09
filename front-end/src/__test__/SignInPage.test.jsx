import React from "react";
import { render, screen, act } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import SignInPage from "./SignInPage";
import "@testing-library/jest-dom/extend-expect";

describe("SignInPage Component", () => {
  it("renders the SignInPage component for different viewport sizes", async() => {
    render(
      <Router>
        <SignInPage />
      </Router>
    );

    const setViewportSize = (width, height) => {
      window.innerWidth = width;
      window.innerHeight = height;
      window.dispatchEvent(new Event("resize"));
    };

    await act(async() => {
      setViewportSize(360, 640); // Mobile view
    });

    const mobileElements = {
      closeButton: screen.queryByText("Close"),
      userNameInput: screen.getByPlaceholderText("User name"),
      passwordInput: screen.getByPlaceholderText("Password"),
      rememberMeCheckbox: screen.getByLabelText("Remember Me"),
      loginButton: screen.queryByText("Login"),
      registerButton: screen.queryByText("Register"),
    };
    
    expect(mobileElements.closeButton).toBeInTheDocument();
    expect(mobileElements.userNameInput).toBeInTheDocument();
    expect(mobileElements.passwordInput).toBeInTheDocument();
    expect(mobileElements.rememberMeCheckbox).toBeInTheDocument();
    expect(mobileElements.loginButton).toBeInTheDocument();
    expect(mobileElements.registerButton).toBeInTheDocument();

    await act(async() => {
      setViewportSize(768, 1024); // Tablet view
    });

    const tabletElements = {
      closeButton: screen.queryByText("Close"),
      userNameInput: screen.getByPlaceholderText("User name"),
      passwordInput: screen.getByPlaceholderText("Password"),
      rememberMeCheckbox: screen.getByLabelText("Remember Me"),
      loginButton: screen.queryByText("Login"),
      registerButton: screen.queryByText("Register"),
    };
    
    expect(tabletElements.closeButton).toBeInTheDocument();
    expect(tabletElements.userNameInput).toBeInTheDocument();
    expect(tabletElements.passwordInput).toBeInTheDocument();
    expect(tabletElements.rememberMeCheckbox).toBeInTheDocument();
    expect(tabletElements.loginButton).toBeInTheDocument();
    expect(tabletElements.registerButton).toBeInTheDocument();

    const results = {

        mobile: [
          "Mobile test result 1",
          "Mobile test result 2",
        ],
        tablet: [
          "Tablet test result 1",
          "Tablet test result 2",
        ],
        desktop: [
          "Desktop test result 1",
          "Desktop test result 2",
        ],
      };
  
      render(<TestResults results={results} />);
    
    
  });
});

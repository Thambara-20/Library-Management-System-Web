import React from "react";
import { render, screen, act } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import SignUp from "./SignUp";
import "@testing-library/jest-dom/extend-expect";
import TestResults from "./TestResults";


describe("SignUp Component", () => {
  it("renders the SignUp component for different viewport sizes", () => {
    render(
      <Router>
        <SignUp />
      </Router>
    );

    const setViewportSize = (width, height) => {
      window.innerWidth = width;
      window.innerHeight = height;
      window.dispatchEvent(new Event("resize"));
    };

    act(() => {
      setViewportSize(360, 640); // Mobile view
    });

    const mobileElements = {
      backButton: screen.queryByText("Back"),
      firstNameInput: screen.getByPlaceholderText("First Name"),
      lastNameInput: screen.getByPlaceholderText("Last Name"),
      addressInput: screen.getByPlaceholderText("Address"),
      emailInput: screen.getByPlaceholderText("email"),
      idInput: screen.getByPlaceholderText("id"),
      registerButton: screen.queryByText("Sign Up"),
      
    };
    expect(mobileElements.backButton).toBeInTheDocument();
    expect(mobileElements.firstNameInput).toBeInTheDocument();
    expect(mobileElements.lastNameInput).toBeInTheDocument();
    expect(mobileElements.addressInput).toBeInTheDocument();
    expect(mobileElements.emailInput).toBeInTheDocument();
    expect(mobileElements.idInput).toBeInTheDocument();
    expect(mobileElements.registerButton).toBeInTheDocument();
   
    act(() => {
      setViewportSize(768, 1024); 
    });

    const tabletElements = {
      backButton: screen.queryByText("Back"),
      firstNameInput: screen.getByPlaceholderText("First Name"),
      lastNameInput: screen.getByPlaceholderText("Last Name"),
      addressInput: screen.getByPlaceholderText("Address"),
      emailInput: screen.getByPlaceholderText("email"),
      idInput: screen.getByPlaceholderText("id"),
      registerButton: screen.queryByText("Sign Up"),
    };

    expect(tabletElements.backButton).toBeInTheDocument();
    expect(tabletElements.firstNameInput).toBeInTheDocument();
    expect(tabletElements.lastNameInput).toBeInTheDocument();
    expect(tabletElements.addressInput).toBeInTheDocument();
    expect(tabletElements.emailInput).toBeInTheDocument();
    expect(tabletElements.idInput).toBeInTheDocument();
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
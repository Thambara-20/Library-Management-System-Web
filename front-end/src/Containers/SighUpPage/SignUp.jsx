import React from "react";
import RegForm from "../../Components/RegForm/RegForm";
import "./SignUp.css";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button } from "@mui/material";
const SignUp = () => {
  return (
    <div>

      <Link to="/" style={{ top: "10px", left: "10px", position: "fixed", zIndex: "100" }}>
        <Button
          variant="contained"
          startIcon={<ArrowBackIcon style={{ color: 'grey' }} />}
          style={{ backgroundColor: 'black', color: 'white', }}>
          Back
        </Button>
      </Link>
      <section className="register-wrapper">
        <div className="paddings innerWidth flexCenter reg-container">
          <div className="right">
            <form action="" className="reg-form">
              <span className="primaryText">Register</span>
              <div className="name">
                <RegForm Label="First Name" placeHolder="First Name" />
                <RegForm Label="Last Name" placeHolder="Last Name" />
              </div>
              <RegForm
                Label="Address"
                placeHolder="Address"
              />
              <RegForm
                Label="Email"
                type="email"
                placeHolder="email"
              />
              <RegForm Label="ID number" placeHolder="id" />

              <div className="name">
                <RegForm Label="Password" type="password" placeHolder="* * * * * * *" />
                <RegForm Label="Confirm Password" type="password" placeHolder="* * * * * * *" />
              </div>

              <div className="reg-log-button">
                <div className="reg-button">
                  <button className="btn btn-primary" type="submit">Register</button>
                </div>

              </div>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
};

export default SignUp;

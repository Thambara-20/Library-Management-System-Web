import React from "react";
import RegForm from "../../Components/RegForm/RegForm";
import "./SignUp.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <section className="register-wrapper">
      <div className="paddings innerWidth flexCenter reg-container">
        <div className="right">
          <form action="" className="reg-form">
            <span className="primaryText">Register</span>
            <div className="name">
              <RegForm Label="First Name" placeHolder="Rasindu" />
              <RegForm Label="Last Name" placeHolder="Rawishanka" />
            </div>
            <RegForm
              Label="Address"
              placeHolder="No2, Piliyandala rd, Colombo"
            />
            <RegForm
              Label="Email"
              type="email"
              placeHolder="SmartBook@gmail.com"
            />
            <RegForm Label="ID number" placeHolder="9909349839 V" />

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
  );
};

export default SignUp;

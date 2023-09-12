import React from "react";
import imgage from "./register-image.jpg";
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
              <div className="log-button">
                <Link to={"/SignInPage"}>
                <button type="button" className="btn btn-outline-primary">
                 Sign In
                </button>
                </Link>
              </div>
            </div>
          </form>
        </div>
        <div className="left">
          <div className="image-container">
            <img src={imgage} alt="left image of registraion" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;

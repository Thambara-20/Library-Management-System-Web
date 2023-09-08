import React from "react";
import imgage from "./email.jpg";
import RegForm from "../../Components/RegForm/RegForm";
import "./ContactEmail.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <section className="register-wrapper">
      <div
        className="paddings innerWidth flexCenter reg-container"
        id="reg-container"
      >
        {/* left-side */}
        <div className="right">
          <form action="" className="reg-form">
            <span className="primaryText">Send an Email</span>
            <div className="name">
              <RegForm
                name="user_name"
                Label="First Name"
                placeHolder="Rasindu"
              />
            </div>
            <RegForm name="subject" Label="Subject" placeHolder="I want to borrow a book" />
            <RegForm
              Label="Email"
              type="email"
              name="user_email"
              placeHolder="SmartBook@gmail.com"
            />
            <textarea name="message"></textarea>
            <div className="reg-log-button">
              <div className="reg-button">
                <button className="btn btn-primary" type="submit">
                  Send Mail
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* right-side */}
        <div className="left">
          <div className="image-container" id="re-con">
            <img src={imgage} alt="left image of registraion" id="reg-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;

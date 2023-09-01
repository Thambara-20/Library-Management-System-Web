import React, { Component } from "react";
import "./Register.css";
import register from "./register-image.jpg";
import RegForm from "../../Components/RegForm";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap/Container";

const RegisterPage = () => {
  return (
    <div className="wrapper-reg">
      <div className="container-reg">
        <div className="picture">
          <img src={register} alt="register" />
        </div>

        <div className="form">
          <h2 className="top-header">Registration</h2>
          <div className="name-container">
            <RegForm
              className="first-name"
              Label={"First Name"}
              placeHolder={"Rasindu"}
            />
            <RegForm Label={"Last Name"} placeHolder={"Rawishanka"} />
          </div>
          <div className="email-Container">
            <RegForm
              Margin={"30px"}
              Label={"Email"}
              placeHolder={"example.123@gmail.com"}
            />
            <RegForm
              Margin={"30px"}
              Label={"ID Card Number"}
              placeHolder={"1234567890 V"}
            />
          </div>
          <RegForm
            Margin={"30px"}
            Width={"650px"}
            className="first-name"
            Label={"Address"}
            placeHolder={"No2, Colombo 7, Panadura, Srilanka"}
          />
          <div className="password-container">
            <div className="mb-3 pss" id="pass-p">
              <label for="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                required="true"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="* * * * * * *"
              />
            </div>
            <div className="mb-3 pss" id="pass-c">
              <label for="exampleInputPassword1" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                required="true"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="* * * * * * *"
              />
            </div>
          </div>

          <div class="mb-3 form-check" id="check-box">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              <i className="bi bi-asterisk"></i>agree terms and conditions and give true details..
            </label>
          </div>
          <div className="d-grid gap-2">
          <Link to="/signUP">
            <button type="button" className="btn btn-success" id="register-btn">
              Register
            </button>
            </Link>
            <Link to="/signUP">
            <button type="button" className="btn btn-outline-success" id = "login-btn">
              Log In
            </button>
            </Link>
          </div>

    
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;

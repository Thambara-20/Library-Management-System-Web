import React,{useState} from "react";
import imgage from "./register-image.jpg";
import RegForm from "../../Components/RegForm/RegForm";
import "./SignUp.css";
import { Link } from "react-router-dom";
import popImage from "./otp.png";

const SignUp = () => {

  const [popupState, setPopupState] = useState("");

  return (

    <section className="register-wrapper">
      <div className={`popupMessage ` + popupState} id="popup">
        <div className="up">
          <img src={popImage} alt="popup Image" />
        </div>
        <div className="down">
          <span>Sent an otp to your email</span><br/>
          <span >Enter the OTP</span>
        </div>
        <div><input className="form-control" type="text" placeholder=""/></div>
        <button
          type="button"
          onClick={() => {
            setPopupState("");
          }}
          className="btn btn-outline-success"
        >
          OK
        </button>
      </div>

        
      <div className="paddings innerWidth flexCenter reg-container">
        <div className="right">
          <form action="" className="reg-form" name="reg-form">
            <span className="primaryText">Register</span>
            <div className="name">
              <RegForm Label="First Name" placeHolder="Rasindu" name='firstName' />
              <RegForm Label="Last Name" placeHolder="Rawishanka" name='lastName'/>
            </div>
            <RegForm
              Label="Address"
              placeHolder="No2, Piliyandala rd, Colombo"
              name='address'
            />
            <RegForm
              Label="Email"
              type="email"
              placeHolder="SmartBook@gmail.com"
              name = 'email'
            />
            <RegForm Label="ID number" placeHolder="9909349839 V" name='id'/>

            <div className="name">
              <RegForm Label="Password" type="password" name='password' placeHolder="* * * * * * *" />
              <RegForm Label="Confirm Password" name='cPassword' type="password" placeHolder="* * * * * * *" />
            </div>

            <div className="reg-log-button">
              <div className="reg-button">
              <button className="btn btn-primary" onClick={()=>{setPopupState("open-popup")}} type="submit">Register</button>
              </div>
              <div className="log-button">
                <Link to={"/SignInPage"}>
                <button type="button" className="btn btn-outline-primary">
                 Sing In
                </button>
                </Link>
              </div>
            </div>
          </form>
        </div>
        <div className="left">
          <div className="image-container" id="re-con">
            <img src={imgage} alt="left image of registraion" id="reg-img"/>
          </div>
        </div>
      </div>
    </section>

  );
};

export default SignUp;

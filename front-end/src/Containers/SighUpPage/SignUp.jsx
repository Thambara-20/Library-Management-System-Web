import React,{useState} from "react";
import imgage from "./register-image.jpg";
import RegForm from "../../Components/RegForm/RegForm";
import "./SignUp.css";
import { Link } from "react-router-dom";
import popImage from "./otp.png";
import axios from 'axios';

const SignUp = () => {

  const [popupState, setPopupState] = useState("");
  const [error, setError] = useState(false);
  const [data, setData] = useState({
    Fname: "",
    Sname: "",
    address: "",
    email: "",
    idNumber: "",
    FP: "",
    SP: ""
  });
  
  const isStrongPassword = (password) => {
   // Define regex patterns for different password criteria
  const lengthRegex = /.{8,}/;  // At least 8 characters
  const uppercaseRegex = /[A-Z]/; // At least one uppercase letter
  const lowercaseRegex = /[a-z]/; // At least one lowercase letter
  const numberRegex = /\d/;       // At least one digit
  const specialCharRegex = /[!@#\$%\^&\*\(\)_\+\-=\[\]\{\};:'",<>\.]/; // At least one special character

  // Check the password against each criteria
  const isLengthValid = lengthRegex.test(password);
  const isUppercaseValid = uppercaseRegex.test(password);
  const isLowercaseValid = lowercaseRegex.test(password);
  const isNumberValid = numberRegex.test(password);
  const isSpecialCharValid = specialCharRegex.test(password);

  // Return true if all criteria are met
  return isLengthValid && isUppercaseValid && isLowercaseValid && isNumberValid && isSpecialCharValid;
}
  const postData = async(event) => {
    if (data.FP === data.SP && data.FP.length > 5 && isStrongPassword(data.FP)) {
      setError(false)
      console.log('successfull')
      const newO = {
    name: data.Fname + data.Sname,
    password: data.FP,
    national_id: data.idNumber,

      }
      console.log(newO);
      const status = await axios.post("http://localhost:8000/api/users/signup", {
        name: data.Fname,
        email: data.email,
        address: data.address,
        national_id: data.idNumber,
        password: data.FP
      })
    } else {
      setError(true)
      const newdata = { ...data };
      newdata.SP = "";
      newdata.FP = "";
      setData(newdata);
    }
    
    
  }

  const handleF = (e) => {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }

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
          <form onSubmit={postData} action="" className="reg-form" name="reg-form">
            <span className="primaryText">Register</span>
            <div className="name">
              <RegForm onChange={e=>handleF(e) } value={data.Fname} id="Fname" Label="First Name" placeHolder="First name" name='firstName' />
              <RegForm onChange={e => handleF(e)} value={data.Sname} id="Sname"  Label="Last Name" placeHolder="Last name" name='lastName'/>
            </div>
            <RegForm
              Label="Address"
              placeHolder="Your address"
              name='address'
              onChange={e=>handleF(e) } value={data.address} id="address"
            />
            <RegForm
              Label="Email"
              type="email"
              placeHolder="Your email address"
              name='email'
              onChange={e=>handleF(e) } value={data.email} id="email"
            />
            <RegForm onChange={e=>handleF(e) } value={data.idNumber} id="idNumber" Label="ID number" placeHolder="Your national id" name='id'/>

            <div className="name">
              <RegForm onChange={e=>handleF(e) } value={data.FP} id="FP" Label="Password" type="password" name='password' placeHolder="* * * * * * *" />
              <RegForm onChange={e=>handleF(e) } value={data.SP} id="SP" Label="Confirm Password" name='cPassword' type="password" placeHolder="* * * * * * *" />
            </div>
            {error ? <span id="passD">Password does't match or too short. it should 5 charactors<br/> should includes one uppercase and special charactor</span>:""}
              

            <div className="reg-log-button">
              <div className="reg-button">
                <button onClick={postData}  className="btn btn-primary" type="submit">Register</button>   
                {/* open-popup */}
              </div>
              <div className="log-button">
                <Link to={"/"}>
                <button type="button" className="btn btn-outline-primary">
                 Sign in
                </button>
                </Link>
              </div>
            </div>
          </form>
        </div>

        {/* right side */}
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

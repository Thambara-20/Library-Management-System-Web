import React from 'react'
<<<<<<< Updated upstream
import "../../Styles/Signup.css"
import checkMark from "../../assets/signup-page/check-mark-1.png"
function Signup() {
  return (
    <div className="frame">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="text-wrapper">Login</div>
          <p className="div">How do I become a member?</p>
          <div className="input-container">
            <label className="input-label">User ID</label>
            <input type="text" className="input-field" />
          </div>
          <div className="input-container">
            <label className="input-label">Password</label>
            <input type="password" className="input-field" />
          </div>
          <div className="wrapper" >
            <div className="button-wrapper">
              <button className="login-button">Login</button>
            </div>
            <div className="button-wrapper">
              <button className="register-button">Register</button>
            </div>
          </div>
        
          {/* <img className="check-mark" alt="Check mark" src={checkMark} /> */}
          {/* <div className="text-wrapper-8">agree terms and conditions</div> */}

        </div>
      </div>
    </div>
  );
=======
import "./SignUp.css";


function Signup() {
  return (
    <div className='login-page-css'>
      <h2>Login</h2>
    </div>
  )
>>>>>>> Stashed changes
}

export default Signup;

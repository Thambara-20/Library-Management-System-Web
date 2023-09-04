import React from 'react'
import "../../Styles/SignIn.css"
import { Link } from 'react-router-dom';

function SignInPage() {
  return (
    <div className="frame">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="text-wrapper">Login</div>
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
              <Link to='/Register'>
              <button className="register-button">Register</button>
              </Link>
            </div>
          </div>
        
          {/* <img className="check-mark" alt="Check mark" src={checkMark} /> */}
          {/* <div className="text-wrapper-8">agree terms and conditions</div> */}

        </div>
      </div>
    </div>
  );
}

export default SignInPage;

import React, { Component } from 'react';
import "./Register.css";
import register from "./register-image.jpg"

const RegisterPage = () => {
    return (
        <div className="wrapper">
          <div className="container">
              <div className='picture'><img src= {register} alt="register" /></div>
              <div className='form'>
                <h2 className='top-header'>Registration</h2>
                <div>First Name</div>
                <div>Middle Name</div>
                <div>Last Name</div>
                <div>hello</div>
                </div> 
              
        </div>
      </div>
    );
  };
  
  export default RegisterPage;
import React, { useState } from 'react';

import '../../Styles/SignIn.css';
import { useNavigate } from 'react-router-dom';
import { login } from '../../services/authService';

const SignInPage = ({ onClose,onSuucessClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(formData);
            onClose();
            onSuucessClose();
            navigate("/");
       
    } catch (error) {
        console.error("Error during login:", error);
        setErrorMessage("An error occurred during login.");
    }
};


  return (
    <div className="popup-wrapper">
      <div className="popup">
        <button className="popup-close-button" onClick={onClose}>
          Close
        </button>
        <div className="frame">
          <div className="overlap-group-wrapper">
            <div className="overlap-group">
              <div className="text-wrapper">Login</div>
              <form onSubmit={handleSubmit}>
                <div className="input-container">
                  <label className="input-label">User name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="input-field"
                    required
                  />
                </div>
                <div className="input-container">
                  <label className="input-label">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="input-field"
                    required
                  />
                </div>
                <div className="error-message">{errorMessage}</div>
                <div className="wrapper">
                  <div className="button-wrapper">
                    <button type="submit" className="login-button">
                      Login
                    </button>
                  </div>
                  <div className="button-wrapper">
                    <button className="register-button">Register</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default SignInPage;



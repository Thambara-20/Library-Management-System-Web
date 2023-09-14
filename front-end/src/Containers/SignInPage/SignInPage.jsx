import React, { useState } from 'react';
import '../../Styles/SignIn.css';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../services/authService';
import "font-awesome/css/font-awesome.css";
import IconButton from '@mui/material/IconButton';
import GoogleIcon from '@mui/icons-material/Google';


const SignInPage = ({ onClose, onSuucessClose }) => {
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
            <div className="overlap-group" >


                <div className="text-wrapper">Login</div>
              <div className='login-wrapper'>

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

                  <div className="checkbox-container">
                    <input type="checkbox" id="rememberMe" />
                    <label htmlFor="rememberMe">Remember Me</label>
                  </div>
                  <div className="wrapper">
                    <div className="reg-log-button">
                      <div className="reg-button">
                        <button className="btn btn-primary" type="submit">Login</button>
                      </div>
                    </div>
                    <div className="reg-log-button">
                      <Link to={'/Register'} id='link'>
                        <div className="reg-button">
                          <button className="btn btn-primary">Register</button>
                        </div>
                      </Link>
                    </div>
                  </div>
                </form>
              


                <div className="divider"></div> {/* Add this line to create the black line */}

                <button className="google-button" >
                  <GoogleIcon className="google-icon" />
                  Sign in with Google
                </button>




              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;




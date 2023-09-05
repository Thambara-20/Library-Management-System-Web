import React, { useEffect, useState } from "react";
import logo from "./smart_logo.png";
import "./Header.css";
import { Link } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from 'react-outside-click-handler';

import SignInPage from "../../Containers/SignInPage/SignInPage";
import auth from "../../services/authService";


const Header = () => {
  const [showSignUpPopup, setShowSignUpPopup] = useState(false);
  const [isUserLogIn, setUserLogIn] = useState(false);
  const [isAdminLoggedIn, setAdminLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);


  const openSignUpPopup = () => {
    setShowSignUpPopup(true);
  };

  const closeSignUpPopup = () => {
    setShowSignUpPopup(false);
  };

  const changeIconLogIn = () => {
    setUserLogIn(true);
  };

  const changeIconLogOut = () => {
    auth.logout(); // Call the logout function from your authService
    setUserLogIn(false); // Set isUserLogIn to false when logged out
    setAdminLoggedIn(false);
  };

  const getMenuStyles = (menuOpen) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpen && "-100%" };
    }
  };

  // Use useEffect to check the user's login status on component mount
  useEffect(() => {
    const user = auth.getCurrentUser();
    
    // Assuming user.isAdmin is correctly set when a user is an admin
    if (user && user.isAdmin) {
      setUserLogIn(true);
      setAdminLoggedIn(true);
    } else if (user) {
      setUserLogIn(true);
      setAdminLoggedIn(false);
    } else {
      setUserLogIn(false);
      setAdminLoggedIn(false);

    }
  }, []);

  return (
    <section className="h-wrapper">
      <div className="flexCenter padding innerWidth h-container" id="h-container">
        <a href="">
          <img src={logo} alt="logo" className="img" height={80} />
        </a>
        <OutsideClickHandler onOutsideClick={() => setMenuOpen(false)}>
          <div className="flexCenter h-menu" style={getMenuStyles(menuOpen)}>
            <Link to="/" className="navbar-elements">
              Home
            </Link>
            <Link to="/Library" className="navbar-elements">
              Library
            </Link>
            <Link className="navbar-elements">About Us</Link>
            <Link to="/ContactUs" className="navbar-elements">
              Contact Us
            </Link>
            {isAdminLoggedIn && <Link className="nav-item nav-link" to="/admin">Admin</Link>}
            <Link>
              {isUserLogIn ? (
                <button className="button" onClick={changeIconLogOut}>Log Out</button>
              ) : (
                <button className="button" onClick={openSignUpPopup}>Sign Up</button>
              )}
            </Link>
          </div>
        </OutsideClickHandler>
        <div className="menu-icon" onClick={() => setMenuOpen((prev) => !prev)}>
          
          <BiMenuAltRight size={30} />
        </div>
        {showSignUpPopup && (
          <SignInPage onClose={closeSignUpPopup} onSuucessClose={changeIconLogIn} />
        )}
      </div>
    </section>
  );
};

export default Header;

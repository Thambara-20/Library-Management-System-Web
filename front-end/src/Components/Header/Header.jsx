import React, { useEffect, useState } from "react";
import logo from "./smart_logo.png";
import "./Header.css";
import { Link } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from 'react-outside-click-handler';
import { AiOutlineHome } from 'react-icons/ai';
import { HiOutlineBuildingLibrary } from 'react-icons/hi2';
import { GoPeople } from 'react-icons/go'
import { ImMail2 } from 'react-icons/im'
import SignInPage from "../../Containers/SignInPage/SignInPage";
import auth from "../../services/authService";


const Header = () => {
  const [showSignUpPopup, setShowSignUpPopup] = useState(false);
  const [isUserLogIn, setUserLogIn] = useState(false);
  const [isAdminLoggedIn, setAdminLoggedIn] = useState(true);
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
    auth.logout(); 
    setUserLogIn(false); 
    setAdminLoggedIn(false);
  };

  const getMenuStyles = (menuOpen) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpen && "-100%" };
    }
  };

  const handleTogleButton = (event)=>{
    const temp = !menuOpen;
    setMenuOpen(temp);
  };
  useEffect(() => {
    const user = auth.getCurrentUser();
    
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
        <OutsideClickHandler onOutsideClick={handleTogleButton}>
          <div className="flexCenter h-menu" style={getMenuStyles(menuOpen)}>
            <Link to="/" className="navbar-elements" style={{ textDecoration: "none" }}>
              <AiOutlineHome style={{paddingBottom:4,paddingRight:2}} size={20}/>Home
            </Link>
            <Link to="/Library" className="navbar-elements" style={{ textDecoration: "none" }}>
              <HiOutlineBuildingLibrary style={{paddingBottom:4,paddingRight:2}} size={20}/>Library
            </Link>
            <Link to="/AboutUs" className="navbar-elements" style={{ textDecoration: "none" }}>
              <GoPeople style={{paddingBottom:4,paddingRight:2}} size={20}/>About Us
            </Link>
            <Link to="/ContactUs" className="navbar-elements" style={{ textDecoration: "none" }}>
              <ImMail2 style={{paddingBottom:4,paddingRight:2}} size={20}/>Contact Us
            </Link>
            {isAdminLoggedIn && (
              <Link className="navbar-elements" to="/admin" style={{ textDecoration: "none" }}>
                Admin
              </Link>
            )}
            <Link>
              {isUserLogIn ? (
                <button className="button" onClick={changeIconLogOut}>
                  Log Out
                </button>
              ) : (
                <button className="button" onClick={openSignUpPopup}>
                  Sign Up
                </button>
              )}
            </Link>
          </div>

        <div className="menu-icon" onClick={handleTogleButton}>
          
          <BiMenuAltRight size={30} />
        </div>
        </OutsideClickHandler>
        {showSignUpPopup && (
          <SignInPage onClose={closeSignUpPopup} onSuucessClose={changeIconLogIn} />
        )}
      </div>
    </section>
  );
};

export default Header;

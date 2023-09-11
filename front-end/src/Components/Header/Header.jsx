import React, { useEffect, useState } from "react";
import logo from "./smart_logo.png";
import "./Header.css";
import { Link } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from 'react-outside-click-handler';

import SignInPage from "../../Containers/SignInPage/SignInPage";
import auth from "../../services/authService";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button, IconButton, Menu, MenuItem, Select } from "@mui/material";

const Header = () => {
  const [showSignUpPopup, setShowSignUpPopup] = useState(false);
  const [isUserLogIn, setUserLogIn] = useState(true);
  const [isAdminLoggedIn, setAdminLoggedIn] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false); // Add this state
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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


  const getMenuStyles = (menuOpen) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpen && "-100%" };
    }
  };
  const selectStyle = {
    '& .MuiSelect-icon': {
      color: '#2949c6', // Change the arrow color here
    },
  };
  
  

  return (
    <section className="h-wrapper">
      <div className="flexCenter padding innerWidth h-container" id="h-container">
        <a href="">
          <img src={logo} alt="logo" className="img" height={80} />
        </a>
        <OutsideClickHandler onOutsideClick={() => setMenuOpen(false)}>
          <div className="flexCenter h-menu" style={getMenuStyles(menuOpen)}>
            <Link to="/" className="navbar-elements" style={{ textDecoration: "none" }}>
              Home
            </Link>
            <Link to="/Library" className="navbar-elements" style={{ textDecoration: "none" }}>
              Library
            </Link>
            <Link className="navbar-elements" style={{ textDecoration: "none" }}>
              About Us
            </Link>
            <Link to="/ContactUs" className="navbar-elements" style={{ textDecoration: "none" }}>
              Contact Us
            </Link>
            {isAdminLoggedIn && (
              <Link className="navbar-elements" to="/admin" style={{ textDecoration: "none" }}>
                Admin
              </Link>
            )}
            <Link>
              {isUserLogIn ? (
                
                <Button >
                <><AccountCircleIcon style={{color:'#2949c6'}} />

                  <Select className="selecter"sx={selectStyle} variant="outlined" displayEmpty>
                    <MenuItem className="menuitem" value="">Profile</MenuItem>
                    <MenuItem className='menuitem'value="Category 1">My Reservations</MenuItem>
                    <MenuItem className= 'menuitem'value="Category 2">Notifications</MenuItem>
                    {/* Add more categories as needed */}
                  </Select> 
               
                </>
                
              </Button>
              ) : (
                <button className="button" onClick={openSignUpPopup}>
                  Sign Up
                </button>
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



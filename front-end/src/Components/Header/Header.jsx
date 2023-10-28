import React, { useEffect, useState } from "react";
import logo from "./logo.png";
import "./Header.css";
import { Link } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
import { AiOutlineHome } from "react-icons/ai";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import { GoPeople } from "react-icons/go";
import { ImMail2 } from "react-icons/im";
import SignInPage from "../../Containers/SignInPage/SignInPage";
import auth from "../../services/authService";
import HeaderDropDown from "./HeaderDropDown";

const Header = () => {
  const [showSignUpPopup, setShowSignUpPopup] = useState(false);
  const [isUserLogIn, setUserLogIn] = useState(true);
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
      return { visibility: menuOpen ? "visible" : "hidden" };
    }
  };

  const handleTogleButton = () => {
    if (menuOpen) {
      setMenuOpen(false);
    } else {
      setMenuOpen(true);
    }
  };

  const handleMenuItemClick = () => {
    // Close the menu when a menu item is clicked
    setMenuOpen(false);
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
        <Link to="/">
          <img src={logo} alt="logo" className="img" height={80} />
        </Link>
        <OutsideClickHandler onOutsideClick={handleTogleButton}>
          <div className="flexCenter h-menu" style={getMenuStyles(menuOpen)}>
            <Link
              to="/"
              className="navbar-elements"
              style={{ textDecoration: "none" }}
              onClick={handleMenuItemClick}
            >
              <AiOutlineHome style={{ paddingBottom: 4, paddingRight: 2 }} size={20} />
              Home
            </Link>
            <Link
              to="/Library"
              className="navbar-elements"
              style={{ textDecoration: "none" }}
              onClick={handleMenuItemClick}
            >
              <HiOutlineBuildingLibrary style={{ paddingBottom: 4, paddingRight: 2 }} size={20} />
              Library
            </Link>
            <Link
              to="/AboutUs"
              className="navbar-elements"
              style={{ textDecoration: "none" }}
              onClick={handleMenuItemClick}
            >
              <GoPeople style={{ paddingBottom: 4, paddingRight: 2 }} size={20} />
              About Us
            </Link>
            <Link
              to="/ContactUs"
              className="navbar-elements"
              style={{ textDecoration: "none" }}
              onClick={handleMenuItemClick}
            >
              <ImMail2 style={{ paddingBottom: 4, paddingRight: 2 }} size={20} />
              Contact Us
            </Link>
            {isAdminLoggedIn && (
              <Link
                className="navbar-elements"
                to="/admin"
                style={{ textDecoration: "none" }}
                onClick={handleMenuItemClick}
              >
                Admin
              </Link>
            )}
            <Link>
              {isUserLogIn ? (
                <HeaderDropDown onLogout={changeIconLogOut} />
              ) : (
                <button className="button" onClick={openSignUpPopup}>
                  Login
                </button>
              )}
            </Link>
          </div>
          <div className="menu-icon" onClick={() => setMenuOpen((prev) => !prev)}>
            <BiMenuAltRight size={30} />
          </div>
        </OutsideClickHandler>
        {showSignUpPopup && <SignInPage onClose={closeSignUpPopup} onSuucessClose={changeIconLogIn} />}
      </div>
    </section>
  );
};

export default Header;

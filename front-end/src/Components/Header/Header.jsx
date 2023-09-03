import React, { useState } from "react";
import logo from "./smart_logo.png";
import "./Header.css";
import { Link } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from 'react-outside-click-handler';
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const getMenuStyles = (menuOpen)=>{
    if(document.documentElement.clientWidth <= 800){
      return{right:!menuOpen&& "-100%"}
    }
  }
  return (
    <section className="h-wrapper ">
      <div
        className="flexCenter padding innerWidth h-container"
        id="h-container"
      >
        <a href="">
          <img src={logo} alt="logo" className="img" height={80} />
        </a>
        <OutsideClickHandler onOutsideClick={()=>setMenuOpen(false)}>

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

          <Link to="/SignInPage">
            <button className="button">
              <a href="">Sign Up</a>
            </button>
          </Link>
        </div>
        </OutsideClickHandler>
        <div className="menu-icon" onClick={()=>{setMenuOpen((prev)=>!(prev))}}>
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;

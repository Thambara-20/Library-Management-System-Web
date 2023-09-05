import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart">
          <span className="orangeText">SmartBook</span>
          <span className="secondaryText">
            Our vision is to make all people
            <br />
            more knowledgeable.
          </span>
        </div>
        {/* right side */}
        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">No2, Piliyandala rd, Moratuwa</span>
          <div className="flexCenter f-menu">
            <span >Home</span>
            <span >Services</span>
            <span >Books</span>
            <span>About us</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

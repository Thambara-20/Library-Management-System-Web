import React from "react";
import "./TextBanner.css";
const TextBanner = () => {
  return (
    <div>
      <section className="g-wrapper">
        <div className="paddings innerWidth g-container">
          <div className="flexColCenter inner-Containe">
            <span className="primaryText">Get Started With the Alpha</span>
            <span className="secondaryText">
              Join us to start your knowledge journey.
              <br /> Search Your book and find most Interest one
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TextBanner;

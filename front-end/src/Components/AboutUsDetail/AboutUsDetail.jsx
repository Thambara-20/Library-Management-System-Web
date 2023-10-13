import React from "react";
import "./AboutUsDetail.css";
import aboutImg from "./aboutUs.jpeg";
import Aos from "aos";

const AboutUsDetail = () => {
  return (
    <section className="heor" data-aos='fade-up'>
      <div className="container-about">
        {/* this is left side of the about us container top */}
        <div className="left-about">
          <div className=" h-about">
            <span className="primaryText">About Us</span>
          </div>
          <div className="aboutContainer">
            <span className="orangeText">Welcome to our website</span>
            <br />
            <span className="secondaryText">
              Explore our extensive collection of resources, <br />
              discover the latest tools, and join a vibrant community of
              <br /> forward-thinkers who share your passion for libraries and
              knowledge.
              <br /> Together, we'll shape the future of library management.
            </span>
                  </div>
                  <div className="b-about">
                      
                  <button className="button">Get Start</button>
                  </div>
        </div>

        {/* this is right side of the about top */}
        <div className="right-about">
          <div className="con-img-about">
            <img src={aboutImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsDetail;

import React from "react";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img4.jpg";
import "./AboutUsServices.css";
import image from "./ab.jpg";

const AboutUsService = () => {
  return (
    <sectoin className="section-white">
      <div className="about-group">
        <div className="text-container">
          <span className="primaryText">
            Adaptive Strategies for Library Workers in the Digital Age:
            Navigating the Transition to Online Resources and Service
          </span>
          <br />
          <span className="hello">
            Our Team of Experts is here to guide you on this exciting journey of
            evolution. Whether you're a librarian, a knowledge enthusiast, or a
            <br />
            tech-savvy explorer, we've curated the best content and cutting-edge
            technologies to help you stay ahead of the curve. From streamlined
            <br />
            cataloging systems to seamless digital lending platforms, we've got
            it all covered.
          </span>
        </div>
      </div>
    </sectoin>
  );
};

export default AboutUsService;

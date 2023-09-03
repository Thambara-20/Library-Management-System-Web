import React from "react";
import "./Authors.css";
import img1 from "./equinix.png";
import img2 from "./prologis.png";
import img3 from "./realty.png";
import img4 from "./tower.png"


const Authors = () => {
  return (
    <section className="author-wrapper">
      <div className="paddings innerWidth flexCenter author-container">
        <img src={img1} alt="Author" />
        <img src={img2} alt="Author" />
        <img src={img3} alt="Author" />
        <img src={img4} alt="Author" />
      </div>
    </section>
  );
};

export default Authors;

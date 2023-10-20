import React from "react";
import "./AboutUsDetail.css";
import aboutImg from "./aboutUs.jpeg";
import Aos from "aos";

const AboutUsDetail = () => {
  return (
    <section className="heor" data-aos='fade-up' style={{display:'flex', justifyContent:'center', alignItems:'center',marginBottom:10}}>
      <div className="container-about" data-aos="fade-up" style={{display:'flex', justifyContent:'center', alignItems:'center', marginBottom:10}}>
        {/* this is left side of the about us container top */}
        <div className="left-about" style={{ display: 'flex', flexDirection: 'column', flex: 1.4, alignItems: 'center', justifyContent: 'center' }}>

          <div className="aboutContainer" style={{ display: 'flex', flexDirection: 'column' }} >
            <span className="orangeText">Welcome to our website</span>
            <br />
            <span className="secondaryText">
           "Here, you are invited to explore a wealth of resources dedicated to libraries and knowledge management. <br/>
            Dive into our extensive collection of materials, stay updated with the latest tools,<br/>
             and become part of a vibrant community of forward-thinkers who share your deep passion for libraries and knowledge.<br/> 
             Together, we will collaboratively shape the future of library management. <br />
             This website is your portal to a world of information, <br/>
             innovation, and connection, all centered around our shared enthusiasm for libraries and the management of knowledge."
      
              <br /> Together, we'll shape the future of library management.
            </span>
          <div className="b-about">
            <button className="button">Get Start</button>

          </div>
          </div>
        </div>

        {/* this is right side of the about top */}
        <div className="right-about" style={{ display: 'flex', flex: 1, marginBottom:10 }}>
          <div className="con-img-about">
            <img src={aboutImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsDetail;

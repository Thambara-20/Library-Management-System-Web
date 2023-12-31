import React from "react";
import right from "./left-c.jpg";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";
import { AiFillAndroid } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactWhatsapp from 'react-whatsapp';
import {CopyToClipboard} from 'react-copy-to-clipboard';


const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

const openEmailTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };


  return (
    <section className="contact-wrapper"data-aos="fade-up" >
      <div className="paddings innerWidth flexCenter c-container"data-aos="fade-up" >
        {/* this is our left side */}
        <div className="flexColStart c-left" data-aos="fade-up">
          <span className="orangeText">Our contacts</span>
          <span className="primaryText">Easy to Contact</span>
          <span className="secondaryText">
            We always ready to help by providing the best service
          </span>

          <div className="flexColStart contactModes" data-aos="fade-up" >
            {/* {first row} */}
            <div className="flexStart row">
              <div className="flexColCenter mode" id="mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">+9476 3055 795</span>
                  </div>
                </div>
                <CopyToClipboard className="flexCenter button btn-color" text="0763055795">
                  <Link style={{ textDecoration: 'none' }}className="flexCenter button btn-color">
                  
                <div  className="flexCenter button btn-color">Call Now</div>
                  </Link>
                </CopyToClipboard>
               
              </div>
              {/* first row second element */}
              <div className="mode flexColCenter mode" id="mode" data-aos="fade-up">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">WhatsApp</span>
                    <span>+9476 3055 795</span>
                  </div>
                </div>
                <div  className="flexCenter button btn-color"><ReactWhatsapp className="flexCenter button btn-color what-btn" number="+94763055795" message="I want to know something about registration">Chat Now</ReactWhatsapp></div>
              </div>
            </div>

            {/* second raw first element */}
            <div className="flexStart row" data-aos="fade-up">
              <div className="flexColCenter mode" id="mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Mail</span>
                    <span>
                      smartbook
                      <br />
                      @gmail.com
                    </span>
                  </div>
                </div>
                <Link style={{ textDecoration: 'none' }} className="flexCenter button btn-color" to={'/ContactUs'}> 
                <div className="flexCenter button btn-color">Mail Now</div>
            </Link>
           
              </div>
              {/* second row second element */}
              <div className="flexColCenter mode" id="mode" data-aos="fade-up">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <AiFillAndroid size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">PlayStore</span>
                    <span>Download App</span>
                  </div>
                </div>
                <Link style={{ textDecoration: 'none' }} className="flexCenter button btn-color">
                
                <div className="flexCenter button btn-color">Go Store</div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* this is our right side */}
        <div className="flexCenter contact-right" data-aos="fade-up">
          <div className="image-container" id="i-c">
            <img src={right} alt="right-img" className="" />
          </div>
        </div>
    
        
      </div>
    </section>
  );
};

export default Contact;

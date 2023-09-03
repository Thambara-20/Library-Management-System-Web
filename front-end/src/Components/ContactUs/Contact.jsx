import React from "react";
import right from "./left-c.jpg";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";
import { AiFillAndroid } from "react-icons/ai";

const Contact = () => {
  return (
    <section className="contact-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* this is our left side */}
        <div className="flexColStart c-left">
          <span className="orangeText">Our contacts</span>
          <span className="primaryText">Easy to Contact</span>
          <span className="secondaryText">
            We always ready to help by providing the best service
          </span>

          <div className="flexColStart contactModes" >
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
                <div className="flexCenter button">Call Now</div>
              </div>
              {/* first row second element */}
              <div className="mode flexColCenter mode" id="mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">WhatsApp</span>
                    <span>+9476 3055 795</span>
                  </div>
                </div>
                <div className="flexCenter button">Chat Now</div>
              </div>
            </div>

            {/* second raw first element */}
            <div className="flexStart row">
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
                <div className="flexCenter button">Mail Now</div>
              </div>
              {/* second row second element */}
              <div className="flexColCenter mode" id="mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <AiFillAndroid size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">PlayStore</span>
                    <span>Download App</span>
                  </div>
                </div>
                <div className="flexCenter button">Go Store</div>
              </div>
            </div>
          </div>
        </div>

        {/* this is our right side */}
        <div className="flexCenter welcome-right">
          <div className="image-container">
            <img src={right} alt="right image" className="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
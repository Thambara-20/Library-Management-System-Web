import React, { useEffect, useRef, useState } from "react";
import imgage from "./email.jpg";
import RegForm from "../../Components/RegForm/RegForm";
import "./ContactEmail.css";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import popImage from "./popup.png";
import Aos from "aos";

const ContactEmail = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  const [popupState, setPopupState] = useState("");
  const pop = document.getElementById("popup");
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rieby2k",
        "template_sc2h6e5",
        form.current,
        "KnekiRosUkY4Bcghw"
      )
      .then(
        (result) => {
          console.log(result.text);
          setPopupState("open-popup");
          e.target.reset();
          //handlePopup();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handlePopup = () => {
    if (popupState) {
      pop.classList.add("open-popup");
    } else {
      pop.classList.remove("open-popup");
    }
  };

  return (
    <section className="register-wrapper" data-aos="fade-up">
      <div className={`popupMessage ` + popupState} id="popup" data-aos="fade-up">
        <div className="up">
          <img src={popImage} alt="popup Image" />
        </div>
        <div className="down">
          <span className="orangeText">Email Sent</span>
        </div>
        <button
          type="button"
          onClick={() => {
            setPopupState("");
          }}
          className="btn btn-outline-success"
        >
          OK
        </button>
      </div>

      <div
        className="paddings innerWidth flexCenter reg-container"
        id="reg-container"
      >
        {/* left-side */}
        <div className="right">
          <form ref={form} onSubmit={sendEmail} action="" className="reg-form">
            <span className="primaryText">Send an Email</span>
            <div className="name">
              <RegForm
                name="user_name"
                Label="First Name"
                placeHolder="Rasindu"
                type="text"
              />
            </div>
            <RegForm
              name="subject"
              Label="Subject"
              placeHolder="I want to borrow a book"
            />
            <RegForm
              type="email"
              name="user_email"
              Label="Email"
              placeHolder="SmartBook@gmail.com"
            />
            <textarea name="message"></textarea>
            <div className="reg-log-button">
              <div className="reg-button">
                <button
                  className="btn btn-primary"
                  type="submit"
                  onClick={() => {}}
                >
                  Send Mail
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* right-side */}
        <div className="left">
          <div className="image-container" id="re-con">
            <img src={imgage} alt="left image of registraion" id="reg-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactEmail;

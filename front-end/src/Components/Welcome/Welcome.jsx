import React from "react";
import rightImage from "./main.jpg";
import "./Hero.css";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { duration } from "@mui/material";

const Welcome = () => {
  return (
    <section className="welcome-wrapper">
      <div className="paddings innerWidth flexCenter w-container" id="welco">
        {/* this is left side of main content */}
        <div className=" flexColStart welcome-left">
          <div className="welcome-title">
            <motion.div initial={{ y: "7rem",x:'7rem', opacity: 0 }}
              animate={{ y: 0,x:0, opacity: 1 }}
              transition={{ duration: 5, type: "spring" }} className="blue-circle"></motion.div>
            <motion.h1
              initial={{ y: "5rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 5, type: "spring" }}
              className="header-h"
            >
              Empowering
              <br />
              Minds
              <br />
              Through Books
            </motion.h1>
          </div>
          <div className="flexColStart welcome-description">
            <span className="secondaryText">
              Where Curiosity Meets a World of Books
            </span>
            <span className="secondaryText">
              Forget all difficulties in finding a book for you.
            </span>
          </div>
          <div className="get-start-btn">
            <Link to="/Library">
              <motion.button initial={{ x: "3rem", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 3, type: "spring" }} className="get-button button" id="get-btn">
                Get Started
              </motion.button>
            </Link>
          </div>
          <div className="flexCenter stats" id="stat">
            <div className="flexColStart stat">
              <span>
                <CountUp start={7435} end={9455} duration={3} />
                <span>+</span>
              </span>
              <span className="secondaryText">Books</span>
            </div>
            <div className="flexColStart stat">
              <span>
                <CountUp start={45} end={536} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Users</span>
            </div>
            <div className="flexColStart stat">
              <span>
                <CountUp start={5} end={136} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">New Books</span>
            </div>
          </div>
        </div>

        {/*this is right side of the welcome element*/}
        <div className="flexCenter welcome-right">
          <motion.div
            initial={{ x: "3rem", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 3, type: "spring" }}
            className="image-container"
            id="img-container"
          >
            <img src={rightImage} alt="right image" className="l-image" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;

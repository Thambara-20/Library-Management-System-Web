import React, { useEffect, useState } from "react";
import rightImage from "./main.jpg";
import "./Hero.css";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { duration } from "@mui/material";
import { getBooksCount } from '../../services/bookService';
import { getUsersCount } from '../../services/authService';
import {countUnreadNotifications } from '../../services/notificationService';
import { getReservationsCount } from '../../services/reservationService';

const Welcome = () => {
  const [usersCount, setUsersCount] = useState(0);
  const [booksCount, setBooksCount] = useState(0);
  const [unreadEmailsCount, setUnreadEmailsCount] = useState(0);
  const [pendingReservationsCount, setPendingReservationsCount] = useState(0);

  useEffect(() => {
      async function fetchData() {
          try {
              const bc = await getBooksCount();
              setBooksCount(bc.count);
              const ec =await countUnreadNotifications();
              setUnreadEmailsCount(ec)
              const uc = await getUsersCount();
              setUsersCount(uc.count)
              const pc = await getReservationsCount()
              setPendingReservationsCount(pc)
          } catch (e) {
              console.error('Error fetching book count:', e);
          }
      }

      fetchData(); // Call the async function here

  }, []);

  return (
    <section className="welcome-wrapper">
      <div className="paddings innerWidth flexCenter w-container" id="welco" style={{justifyContent:'space-around', alignItems:'center', padding:'10px 10px 10px 10px '}}>
        {/* this is left side of main content */}
        <div className=" flexColStart welcome-left" >
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
                <CountUp start={0} end={booksCount} duration={3} />
                <span>+</span>
              </span>
              <span className="secondaryText">Books</span>
            </div>
            <div className="flexColStart stat">
              <span>
                <CountUp start={0} end={usersCount} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Users</span>
            </div>
            <div className="flexColStart stat">
              <span>
                <CountUp start={0} end={booksCount} duration={4} />
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

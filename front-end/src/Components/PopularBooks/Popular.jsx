import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "./Popular.css";
import { useState, useEffect } from "react";
// Import Swiper styles
import "swiper/css";

import data from "../../utils/slider.json";
import { sliderSetting } from "../../utils/common";
import { Link } from "react-router-dom";
import axios from 'axios';
import { Config } from '../../services/config';
const apiUrl = Config.Url;


const Popular = () => {
  const [newdata, setNewdata] = useState([]);
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  useEffect(() => {
    async function getNewArrivals() {
      const result = await axios.get(`${apiUrl}/popular`);
      setNewdata(result.data);
      console.log(result.data);
    console.log("hekjdkjf");
    }
    getNewArrivals();
    
  }, [])
  data = [...newdata];
  return (
    <section className="popular-wrapper" data-aos="fade-up" data-aos-offset="200">
      <div className="paddings innerWidth popular-container">
        <div className="popular-head flexColStart">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Books</span>
        </div>

        <Swiper {...sliderSetting} data-aos="fade-up" data-aos-offset="200">
          <SliderButtons />
          {data.map((card, i) => {
            return (
              <SwiperSlide className="swiper-s" key={i}>
                <Link to={'/Register'} id="link">
                <div className="flexColStart p-card" >
                  <img src={card.image} alt="book" />
                  <span className="secondaryText p-value">
                  
                  </span>
                  <span className="primaryText">{card.name}</span>
                  <span className="f-size ">{card.detail}</span>
                </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Popular;



const SliderButtons = () => {
  const Swiper = useSwiper();

  return (
    <div className="flexCenter p-buttons">
      <button
        className="slide-button"
        onClick={() => {
          Swiper.slidePrev();
        }}
      >
        &lt;
      </button>
      <button
        className="slide-button"
        onClick={() => {
          Swiper.slideNext();
        }}
      >
        &gt;
      </button>
    </div>
  );
};

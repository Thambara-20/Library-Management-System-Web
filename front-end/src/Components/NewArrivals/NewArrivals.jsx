import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "./NewArrivals.css";
import AOS from "aos";
import "aos/dist/aos.css";
// Import Swiper styles
import "swiper/css";
import { useState, useEffect } from "react";
import data from "../../utils/slider.json";
import { sliderSetting } from "../../utils/common";
import { Link } from "react-router-dom";
import axios from 'axios';
import { Config } from '../../services/config';
const apiUrl = Config.Url;


const NewArrivals = () => {
  const [newdata, setNewdata] = useState([]);
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    AOS.refresh({duration: 2000});
  }, []);

  useEffect(() => {
    async function getNewArrivals() {
      const result = await axios.get(`${apiUrl}`);

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
          <span className="orangeText">New Choices</span>
          <span className="primaryText">New Arrival Books</span>
        </div>

        <Swiper {...sliderSetting} data-aos="fade-up" data-aos-offset="200">
          <SliderButtons />
          {data.map((card, i) => {
            return (
              <SwiperSlide key={i} className="swiper-s">
                <Link to={'/Register'} id="link">
                <div className="flexColStart p-card">
                  <img src={card.image} alt="book" />
                  <span className="secondaryText p-value">
                    <span
                      className="quantity"
                      style={{ color: "orange", marginRight: 5 }}
                    >
                      Quantity
                    </span>
                    <span>{card.price}</span>
                  </span>
                  <span className="primaryText">{card.name.slice(0, 16)}...</span>
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

export default NewArrivals;



const SliderButtons = () => {
  const Swiper = useSwiper();

  return (
    <div className="flexCenter p-buttons">
      <button
        className="slide-button-left"
        onClick={() => {
          Swiper.slidePrev();
        }}
      >
        &lt;
      </button>
      <div className="space-between-buttons">
        
      </div>
      <button
        className="slide-button-right"
        onClick={() => {
          Swiper.slideNext();
        }}
      >
        &gt;
      </button>
    </div>
  );
};

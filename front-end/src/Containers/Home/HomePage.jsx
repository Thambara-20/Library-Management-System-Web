import BookCategories from "../../Components/Categories";
import PopulerBooks from "../../Components/PopularBooks";
import NavbarComponent from "../../Components/navbarComponent";
import MainFooter from "../../Components/footer";
import "../../Styles/Home.css";
import React from "react";

const Home = () => {
  return (
    <div>
      <NavbarComponent />
      <div className="Homepage-wrapper">
        <PopulerBooks />
        <BookCategories />
      </div>
      <div className="bottom-[120px] relative">
        <MainFooter />
      </div>
    </div>
  );
};

export default Home;

import BookCategories from "../../Components/Categories"
import PopulerBooks from "../../Components/PopularBooks"
import NavbarComponent from "../../Components/NavbarComponent"
import Welcome from '../../Components/Welcome/Welcome'
import "../../Styles/Home.css"
import React from 'react'
import Header from "../../Components/Header/Header"

const HomePage = () => {
  return (
    <div className="Homepage-wrapper" >
      <NavbarComponent/>
        <PopulerBooks />
        <BookCategories />
    </div>
  )
}

export default HomePage

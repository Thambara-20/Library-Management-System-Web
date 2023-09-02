import BookCategories from "../../Components/Categories"
import PopulerBooks from "../../Components/PopularBooks"
import NavbarComponent from "../../Components/NavbarComponent"

import "../../Styles/Home.css"
import React from 'react'

const Home = () => {
  return (
    <div className="Homepage-wrapper" >
      <NavbarComponent/>
        <PopulerBooks />
        <BookCategories />
      
    </div>
  )
}

export default Home
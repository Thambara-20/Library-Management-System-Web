import BookCategories from "../../Components/Categories"
import PopulerBooks from "../../Components/PopularBooks"

import "../../Styles/Home.css"
import React from 'react'

const Home = () => {
  return (
    <div className="Homepage-wrapper" >

        <PopulerBooks />
        <BookCategories />
      
    </div>
  )
}

export default Home
import React from 'react'
import AboutUsDetail from '../../Components/AboutUsDetail/AboutUsDetail'
import Header from '../../Components/Header/Header';
import AboutUsService from '../../Components/AboutUsServices/AboutUsService';
import Footer from '../../Components/Footer/Footer';


const AboutUs = () => {
  return (
      <div>
        <Header/>
      <AboutUsDetail />
      <AboutUsService/>
      <Footer/>
    </div>
  )
}

export default AboutUs

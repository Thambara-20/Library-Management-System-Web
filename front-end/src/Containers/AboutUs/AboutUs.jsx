import React from 'react'
import AboutUsDetail from '../../Components/AboutUsDetail/AboutUsDetail'
import Header from '../../Components/Header/Header';
import AboutUsService from '../../Components/AboutUsServices/AboutUsService';

const AboutUs = () => {
  return (
      <div>
        <Header/>
      <AboutUsDetail />
      <AboutUsService/>
    </div>
  )
}

export default AboutUs

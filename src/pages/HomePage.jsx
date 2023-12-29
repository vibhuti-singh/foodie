import React from 'react'
import SliderSec from '../components/SliderSec'
import CardSlider from '../components/CardSlider'
import About from './About'
import Reservation from './Reservation'
import FooterPart from '../components/FooterPart'

const HomePage = () => {
  return (
    <>
      <div id="home">
      
      <SliderSec />
      <CardSlider />
      <div id="about">
        <About />
      </div>
      <div id="reservation">
        <Reservation />
      </div>
      <FooterPart /></div>
    </>
  );
};


export default HomePage

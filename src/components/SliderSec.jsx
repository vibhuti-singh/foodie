import React, { useState, useEffect } from 'react';
import chinise from "../assets/Chinese .jpg"
import icecream from "../assets/icecream.jpg"
import paneer from "../assets/paneer.jpg"
import indian from "../assets/indian.jpg"
import { Link } from 'react-router-dom';
const SliderSec = () => {
  const slides = [
    {
      imageUrl: chinise,
      title: 'Chinese cuisine',
      content: 'Chinese cuisine tantalizes taste buds with its diverse flavors and expertly crafted dishes, showcasing a perfect balance of sweet, sour, salty, and umami notes.',
      buttonLabel: 'Explore menu',
    },
    {
      imageUrl: paneer ,
      title: 'Desi-Delight',
      content: 'Paneer Tikka, a delightful Indian appetizer, features marinated and grilled cubes of paneer cheese, infused with smoky flavors and aromatic spices.',
      buttonLabel: 'Explore menu',
    },
    {
      imageUrl: icecream,
      title: 'Sweet & Happiness',
      content: 'Ice cream, a delightful frozen treat, swirls together creamy indulgence and a kaleidoscope of flavors in every blissful scoop.',
      buttonLabel: 'Explore menu',
    },
    {
        imageUrl: indian,
        title: 'Indian Tadka',
        content: 'Indian food is a vibrant tapestry of aromatic spices and diverse flavors, weaving together a culinary journey that captivates the senses.',
        buttonLabel: 'Explore menu',
      },
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container-1 bg-red w-full relative overflow-hidden mt-16">
      <div className="slides flex h-full transition-transform duration-1000 ease-out transform" style={{ transform: `translateX(${-currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className="slide w-full h-full flex-none box-border">
            
            <div className={`slider-sec text ${slide.buttonColor} box-border text-center flex justify-between`}>
            <div className="half-text flex flex-col justify-center items-center p-5 h-full text-gray-700 w-full sm:w-1/2">
            <div className="half-image-upper w-full md:hidden ">
              <img src={slide.imageUrl} alt={`Slide ${index + 1}`} className="w-full object-contain" />
            </div>
 
             <h2 className="text-lg font-bold">{slide.title}</h2>
              <p className="mt-2">{slide.content}</p>
              <Link to={"/menu"}>
              <button className='text-gray px-4 py-2 mt-2 border border-gray-400 rounded-lg hover:border-yellow-500'>{slide.buttonLabel}</button>
              </Link>
             </div>
              <div className="half-image w-1/2 hidden sm:block">
              <img src={slide.imageUrl} alt={`Slide ${index + 1}`} className="w-full object-contain" />
            </div>
            </div>
          </div>
        ))}
      </div>

      <div className="arrow prev absolute text-3xl top-1/2 left-0 cursor-pointer transform -translate-y-1/2" onClick={prevSlide}>
        ❮
      </div>
      <div className="arrow next absolute top-1/2 text-3xl text-black md:text-white right-0 cursor-pointer transform -translate-y-1/2" onClick={nextSlide}>
        ❯
      </div>
    </div>
  );
};

export default SliderSec;

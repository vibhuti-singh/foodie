import React from 'react';
import about from "../assets/about.png";
import logo from "../assets/logo.png"
import {Ri24HoursFill} from "react-icons/ri"
import { IoFastFoodOutline } from "react-icons/io5";
import { CiFaceSmile } from "react-icons/ci";

const About = () => {
  return (
    <div className="container2 mt-20 flex flex-col md:flex-row justify-center items-center h-full">
       <div className="about-img w-full md:w-1/2 h-full relative overflow-hidden hidden md:block">
        <img
          src={about}
          alt="About Us"
          className="w-full h-full rounded"
        />
      </div>

      <div className="w-full md:w-1/2 pl-8">
        <p className='text-red-600'>About</p>
        <h2 className="text-3xl mb-4 flex items-center content-center">Welcome to <img className='h-16' src={logo} alt="" /></h2>
        <p className="text-lg mb-4">
          Where convenience meets culinary delight. We pride ourselves on delivering a diverse range of mouthwatering dishes from local favorites to exotic cuisines. With a seamless ordering experience and fast, reliable delivery, we bring exceptional flavors straight to your doorstep. Join us on a culinary journey, and let Quick Crave redefine your dining experience. Discover the joy of great food, effortlessly delivered.
        </p>
        <p className="text-lg">
          Discover a world of culinary delights with Quick Crave. We curate the finest recipes, share cooking tips, and celebrate the joy of good food. Join us on a gastronomic journey that explores diverse flavors and embraces the art of cooking.
        </p>
        <div className='flex flex-wrap justify-around items-center'>
          <div className='mt-10 text-center flex items-center justify-center flex-col'>
            <Ri24HoursFill className='text-4xl text-gray-500' />
            <p className='text-sm pt-2'>24h Available </p>
          </div>
          <div className='mt-10 text-center flex items-center justify-center flex-col'>
            <IoFastFoodOutline className='text-4xl text-gray-500' />
            <p className='text-sm pt-2'>Quantity + Quality</p>
          </div>
          <div className='mt-10 text-center flex items-center justify-center flex-col'>
            <CiFaceSmile className='text-4xl text-gray-500' />
            <p className='text-sm pt-2'>Happy Customers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

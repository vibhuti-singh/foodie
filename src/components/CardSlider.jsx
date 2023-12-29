import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CardSlider = () => {
  const cards = [
    {
        id: 1,
        imageSrc: 'https://images.slurrp.com/prodarticles/od4ic87vt0f.webp?impolicy=slurrp-20210601&width=1200&height=900&q=75',
        lable:"Punjabi Tadka"
      },
      {
        id: 2,
        imageSrc: 'https://as1.ftcdn.net/v2/jpg/04/02/12/80/1000_F_402128075_06J9Y69ScRrYKFpQr1PAH0L7YziB83ry.jpg', 
        lable:"South Fusion"
      },
      {
        id: 3,
        imageSrc: 'https://as2.ftcdn.net/v2/jpg/02/03/06/45/1000_F_203064510_mkerPoGGefI6JwajMaMoshbMwU6PFbhr.jpg', 
        lable:"Rajasthani Spice"
      },
      {
          id: 4,
          imageSrc: 'https://as1.ftcdn.net/v2/jpg/02/06/86/38/1000_F_206863834_Zgk2DXbKb3DqmAWw9OCfqMnEO2ZNcBG2.jpg', 
           lable:"Gujrati snack "
        },
        {
          id: 5,
          imageSrc: 'https://as2.ftcdn.net/v2/jpg/03/09/11/75/1000_F_309117524_w5boCHE0hfVVfbT3TccStjShZ9EDyKvk.jpg', 
           lable:"Mumbai's Street"
        },
        {
          id: 6,
          imageSrc: 'https://www.mistay.in/travel-blog/content/images/2020/05/Indori-Poha.jpg', 
           lable:"MP Swag"
        },
        {
          id: 7,
          imageSrc: 'https://as2.ftcdn.net/v2/jpg/05/51/07/25/1000_F_551072558_rENux9fqlec5GPBJSaToT69xjcYiGxje.jpg', 
           lable:"Hydrabad's Crown "
        },
        {
          id: 8,
          imageSrc: 'https://seoimgak.mmtcdn.com/blog/sites/default/files/images/famous-dishes-of-delhi-gol-gappa.jpg', 
           lable:"Delhi's Heart"
        },
        {
          id: 9,
          imageSrc: 'https://as1.ftcdn.net/v2/jpg/04/25/97/92/1000_F_425979241_gWadUqgO9YZk37c83O31rS3PxPWXNXgu.jpg', 
           lable:"Bihari Delight"
        },
        {
          id: 10,
          imageSrc: 'https://www.chitalebandhu.in/cdn/shop/files/Rasgulla-Image-_3_1024x1024.jpg?v=1697398551', 
           lable:"Bangali Sweetness"
        },
        
        
  ];
  const sliderRef = useRef(null);

  // Function to clone and append cards to create an infinite loop
  const cloneAndAppendCards = () => {
    const container = sliderRef.current;
    const cardElements = container.querySelectorAll('.card');

    cardElements.forEach((card) => {
      const clone = card.cloneNode(true);
      container.appendChild(clone);
    });
  };

  useEffect(() => {
    const container = sliderRef.current;
    const cardWidth = container.scrollWidth / cards.length;

    // Clone and append cards initially
    cloneAndAppendCards();

    const intervalId = setInterval(() => {
      container.scrollLeft += cardWidth;

      // Check if reached the end of the original cards
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }
    }, 2000); // Adjust the interval time (e.g., 1000 milliseconds for 1 second)

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, [cards]); // Re-run the effect when the cards array changes

  return (
    <div className="relative overflow-hidden mt-9">
        <h3 className='text-center text-2xl font-bold text-gray-600'>your choice just a click away</h3>
      <div
        ref={sliderRef}
        className="flex space-x-4 p-4 overflow-x-auto slider-container"
      >
        
        {cards.map((card) => (
          <div key={card.id} className="card relative flex-none overflow-hidden">
           <div className="cards-arrange flex flex-col justify-center items-center">
           <div className="sliding-cards border-2 rounded-full h-40 w-40 flex flex-col items-center justify-center ">
          <Link className='h-full w-full' to={"/menu"}>
          <img
              className="w-full h-full object-cover rounded-full"
              src={card.imageSrc}
              alt={`Card ${card.id}`}
            />
          </Link>
           </div>
           <p>{card.lable}</p>

           </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div
        className="absolute text-2xl text-white top-1/2 left-0 cursor-pointer transform -translate-y-1/2"
        onClick={() => sliderRef.current.scrollLeft -= 200}
      >
        ❮
      </div>
      <div
        className="absolute text-2xl text-white top-1/2 right-0 cursor-pointer transform -translate-y-1/2"
        onClick={() => sliderRef.current.scrollLeft += 200}
      >
        ❯
      </div>
    </div>
  );
};

export default CardSlider;



import React, { useContext, useState } from 'react';
import CardContext from '../context/CardContext';
import CartContext from '../context/CartContext';
import {BiSearchAlt} from "react-icons/bi"
const Menu = () => {
  const { items } = useContext(CardContext);
  const [search, setSearch] =useState("");
  const [addedItems, setAddedItems] = useState([]);
  const { dispatch } = useContext(CartContext);
  const handleAddToCart = (item) => {
    dispatch({
        type: 'ADD_ITEM',
        payload: item,
      });
    if (!addedItems.includes(item.id)) {
      console.log(`Added ${item.name} to the cart!`);
      setAddedItems((prevItems) => [...prevItems, item.id]);
    }
  };

  return (
    <div className="container mx-auto mt-20">
      <span className='flex justify-center items-center  h-16 w-full text-3xl'>
   <div className=" text-gray-600 border-2 rounded-full flex items-center justify-center border-black">

    <input onChange={(e)=> setSearch(e.target.value)} type="search" name="search" placeholder="find what you love..." className="bg-white h-10 w-80 px-5 rounded-full text-sm focus:outline-none "/>
    <button type="submit" className='p-2'>
       <BiSearchAlt/>
    </button>
</div>
 </span>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-5">
        {items.filter((item)=>item.Dish.toLowerCase().includes(search)).map((item) => (
          <div key={item.id} className="relative bg-white rounded-md overflow-hidden shadow-lg group">
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-48 object-cover object-center transition duration-300 transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-60"></div>
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <h2 className="text-lg font-extrabold text-white">{item.Dish}</h2>
              <p className="text-gray-100 font-bold mb-2">Rating: {item.Rating}</p>
              <p className="text-gray-100 font-bold mb-4">₹{item.Price}</p>
              <button
                onClick={() => handleAddToCart(item)}
                disabled={addedItems.includes(item.id)}
                className={` text-white bg-blue-400 px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none ${
                  addedItems.includes(item.id) && 'cursor-not-allowed'
                }`}
              >
                {addedItems.includes(item.id) ? 'Added' : 'Add to Cart'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;

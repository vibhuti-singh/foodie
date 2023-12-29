import React, { useState } from 'react';
const Reservation = () => {
  const [fullName, setFullName] = useState('');
  const [restaurantName, setRestaurantName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [partySize, setPartySize] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Validation logic...
    const newErrors = {};
    if (!fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    if (!restaurantName.trim()) {
      newErrors.restaurantName = 'Restaurant name is required';
    }
    if (!date.trim()) {
      newErrors.date = 'Date is required';
    }
    if (!time.trim()) {
      newErrors.time = 'Time is required';
    }
    if (!partySize.trim()) {
      newErrors.partySize = 'Party size is required';
    }
  
    if (Object.keys(newErrors).length === 0) {
      // Form is valid, submit the data
      console.log('Form submitted:', { fullName, restaurantName, date, time, partySize });
  
      // Show confirmation message
      setSubmitted(true);
  
      // Reset the form after a delay (e.g., 2 seconds)
      setTimeout(() => {
        resetForm();
      }, 4000);
    } else {
      setErrors(newErrors);
    }
  };
  
  const resetForm = () => {
    setFullName('');
    setRestaurantName('');
    setDate('');
    setTime('');
    setPartySize('');
    setSubmitted(false);
    setErrors({});
  };

  return (
    <div className="res-div mt-16 p-5 w-full flex items-center justify-center">
      
      <div className='w-full md:w-1/2 flex flex-col items-center justify-center p-5 border-2 shadow-lg border-gray-600 rounded-md mt-10'>
      <h1 className='text-3xl text-bold'>Reservation</h1>
       {submitted && (
        <div className="text-center h-96 w-full text-green-500 text-2xl">
          <p>Your reservation has been confirmed! 🎉</p>
          <p>Thank you for choosing our restaurant.</p>
        </div>
      )}
      {!submitted && (
        <form onSubmit={handleSubmit} className="w-full  mt-10">
         {/* Full Name */}
         <div className="mb-4">
            <label htmlFor="fullName" className="block text-gray-700 text-sm font-bold mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className={`w-full px-3 py-2 border ${errors.fullName ? 'border-red-500' : 'border-gray-300'} rounded`}
            />
            {errors.fullName && <p className="text-red-500 text-xs italic">{errors.fullName}</p>}
          </div>

          {/* Restaurant Name */}
          <div className="mb-4">
            <label htmlFor="restaurantName" className="block text-gray-700 text-sm font-bold mb-2">
              Restaurant Name
            </label>
            <input
              type="text"
              id="restaurantName"
              value={restaurantName}
              onChange={(e) => setRestaurantName(e.target.value)}
              className={`w-full px-3 py-2 border ${errors.restaurantName ? 'border-red-500' : 'border-gray-300'} rounded`}
            />
            {errors.restaurantName && (
              <p className="text-red-500 text-xs italic">{errors.restaurantName}</p>
            )}
          </div>

          {/* Date */}
          <div className="mb-4">
            <label htmlFor="date" className="block text-gray-700 text-sm font-bold mb-2">
              Date
            </label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className={`w-full px-3 py-2 border ${errors.date ? 'border-red-500' : 'border-gray-300'} rounded`}
            />
            {errors.date && <p className="text-red-500 text-xs italic">{errors.date}</p>}
          </div>

          {/* Time */}
          <div className="mb-4">
            <label htmlFor="time" className="block text-gray-700 text-sm font-bold mb-2">
              Time
            </label>
            <input
              type="time"
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className={`w-full px-3 py-2 border ${errors.time ? 'border-red-500' : 'border-gray-300'} rounded`}
            />
            {errors.time && <p className="text-red-500 text-xs italic">{errors.time}</p>}
          </div>

          {/* Party Size */}
          <div className="mb-4">
            <label htmlFor="partySize" className="block text-gray-700 text-sm font-bold mb-2">
              Party Size
            </label>
            <select
              id="partySize"
              value={partySize}
              onChange={(e) => setPartySize(e.target.value)}
              className={`w-full px-3 py-2 border ${errors.partySize ? 'border-red-500' : 'border-gray-300'} rounded`}
            >
              <option value="" disabled>
                Select Party Size
              </option>
              <option value="single">Single Person</option>
              <option value="couple">Couple</option>
              <option value="smallFamily">Small Family</option>
              <option value="largeFamily">Large Family</option>
            </select>
            {errors.partySize && (
              <p className="text-red-500 text-xs italic">{errors.partySize}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className=" text-white bg-gray-700 px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
            >
              Reserve Now
            </button>
          </div>
        </form>
      )}
      </div>
    </div>
  );
};

export default Reservation;

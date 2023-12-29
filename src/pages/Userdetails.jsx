import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ccf from "../assets/ccf.jpg";
import ccb from "../assets/ccb.jpg";
import nm from "../assets/name.gif";
import add from "../assets/address.gif";

const Userdetails = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    creditcard: '',
    expiration: '',
    cvv: ''
  });
  const { name, address, creditcard, expiration, cvv } = formData;
  const [imageSrc, setImageSrc] = useState(nm);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    switch (e.target.name) {
      case 'name':
        setImageSrc(nm);
        break;
      case 'address':
        setImageSrc(add);
        break;
      case 'creditcard':
        setImageSrc(ccf);
        break;
      case 'expiration':
        setImageSrc(ccb);
        break;
      case 'cvv':
        setImageSrc(ccb);
        break;
      default:
        setImageSrc('default-image.jpg');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !address || !creditcard || !expiration || !cvv) {
      alert('Please fill in all details');
    } else {
      setIsSubmitted(true);
      // Perform any additional actions (e.g., API call, form submission logic) here
    }
  };

  const getGreeting = () => {
    const currentHour = new Date().getHours();
    if (currentHour >= 6 && currentHour < 12) {
      return 'Good morning!';
    } else if (currentHour >= 12 && currentHour < 18) {
      return 'Good afternoon!';
    } else {
      return 'Good evening!';
    }
  };

  return (
    <div className="flex">
      <div className="flex-1 hidden md:block">
        <img src={imageSrc} alt="Changing Image" className=" conf-page w-full h-100 object-cover" />
      </div>

      <div className="flex-1 cta w-full mt-12 py-10">
        <div className="p-6 shadow-lg rounded-lg max-w-md bg-slate-50 mx-auto">
          {isSubmitted ? (
            <div>
              <h1 className="text-2xl text-black">Thank you for your order!</h1>
              <p>{getGreeting()}</p>
            </div>
          ) : (
            <div>
              <h1 className="text-2xl text-black">Please fill all the details above</h1>
              <form className="mt-4" onSubmit={handleSubmit}>
            <div className="mb-4">
                 <label for="name" className="block text-gray-700 ">Full Name</label>
                <input type="text" id="name" name="name" value={name} className="w-full border rounded-md p-2" placeholder="Enter your name"onChange={handleChange} required/>
            </div>

             <div className="mb-4">
                 <label for="address" className="block text-gray-700 ">Address</label>
               <textarea id="address" name="address" value={address} className="w-full border rounded-md p-2" rows="4" placeholder="123 Main St, City, State, ZIP"onChange={(e)=>setFormData({...formData, address: e.target.value})} required></textarea>
            </div>

            <div className="mb-4">
                <label for="credit-card" className="block text-gray-700 ">Credit Card Number</label>
                 <input type="text" id="creditcard" name="creditcard" value={creditcard} className="w-full border rounded-md p-2" placeholder="1234 5678 9012 3456" onChange={handleChange}required/>
             </div>

             <div className="mb-4">
                 <label for="expiration" className="block text-gray-700 ">Expiration Date</label>
                 <input type="text" id="expiration" name="expiration" value={expiration} className="w-full border rounded-md p-2" placeholder="MM/YY"onChange={handleChange}/>
             </div>

             <div className="mb-4">
                 <label for="cvv" className="block text-gray-700 ">CVV</label>
                 <input type="text" id="cvv" name="cvv" value={cvv} className="w-full border rounded-md p-2" placeholder="123" required onChange={handleChange}/>
             </div>

            <div className="mt-6">
              <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-md">
                Place Order
              </button>
            </div>
            </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Userdetails;
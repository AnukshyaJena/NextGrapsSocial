import React,{useState} from 'react'
import { Outlet} from 'react-router-dom';
import '../index.css';
import Header from '../components/Header';


const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        country: '',
        mobile: '',
        message: '',
        option: '',
        terms: false,
      });
    
      const [errors, setErrors] = useState({});
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: type === 'checkbox' ? checked : value,
        }));
      };
    
    const validateForm = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
          newErrors.email = 'Please enter a valid email';
        }
        if (!formData.country) newErrors.country = 'Please select a country';
        if (!formData.mobile || !/^\d{10}$/.test(formData.mobile)) {
          newErrors.mobile = 'Please enter a valid mobile number';
        }
        if (!formData.message) newErrors.message = 'Message cannot be empty';
        if (!formData.option) newErrors.option = 'Please select an option';
        if (!formData.terms) newErrors.terms = 'You must agree to the terms of service';
    
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Return true if no errors
      };
    const handleSubmit = (e) => {
        e.preventDefault();  // Prevents form from reloading the page
        if (validateForm()) {
          // Form is valid, handle submission (e.g., send data to a server)
          console.log('Form submitted', formData);
          // Clear form or redirect if needed
          setFormData({
            name: '',
            email: '',
            country: '',
            mobile: '',
            message: '',
            option: '',
            terms: false,
          });
        } else {
          console.log('Form has errors');
        }
      };
  return (
    <div>
       {/* Header Section */}
       <section className="min-h-screen flex flex-col bg-cover bg-center bg-[url('/src/images/robothand.jpeg')] bg-no-repeat sm:bg-cover md:bg-cover lg:bg-cover">
      <Header/>
      <form onSubmit={handleSubmit}>
      <div className="container mx-auto p-6 rounded-lg shadow-md justify-center">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* Left Side - Contact Information */}
    <div className="space-y-4">
        <div className='relative text-4xl tracking-[4px] text-white ml-0 mt-24 font-bold'>
          <span className="absolute top-0 ml-1 text-sky-500 text-4xl">
            LET'S CONNECT
          </span>
          {/* Top Layer for "LETS GET" (White color) */}
          <span className="relative">
            LET'S CONNECT
          </span>
        </div>  
        <p className='text-white'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime sequi ducimus perspiciatis dolorum earum, 
          vel nisi hic corporis quam alias!
          </p>
    
      <div className='mt-20'>
        <label className="block text-sm font-medium text-white mb-1" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
            value={formData.name}
            onChange={handleChange}
          className="w-full border-gray-300 rounded-lg shadow-sm p-2 mb-3 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter your name"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-white mb-1" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
         value={formData.email}
            onChange={handleChange}
          className="w-full border-gray-300 rounded-lg shadow-sm p-2 mb-3 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter your email"
          required
        />
      </div>

      <div>
      <label className="block text-sm font-medium text-white  mb-1" htmlFor="dropdown">
         Country
        </label>
        <select
          id="dropdown"
          name="country"
         
          value={formData.country}
          onChange={handleChange}
          className="w-full border-gray-300 rounded-lg shadow-sm mb-3 p-2 focus:ring-blue-500 focus:border-blue-500"
          required
        >
          
          <option value="option1">India</option>
          <option value="option2">USA</option>
          <option value="option3">Canada</option>
          <option value="option2">China</option>
          <option value="option3">Dubai</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-white mb-1" htmlFor="mobile">
          Mobile Number
        </label>
        <input
          type="tel"
          id="mobile"
          name="mobile"
          
          value={formData.mobile}
          onChange={handleChange}
          className="w-full border-gray-300 rounded-lg shadow-sm p-2 mb-3 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter your mobile number"
          required
        />
      </div>
    </div>
   

    {/* Right Side - Message and Options */}
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-white mb-1 mt-52" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          rows="4"
          name="message"
        value={formData.message}
            onChange={handleChange}
          className="w-full border-gray-300 rounded-lg shadow-sm p-2 mb-3 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Write your message"
          required
        ></textarea>
      </div>

      <div>
        <label className="block text-sm font-medium text-white mb-1" htmlFor="dropdown">
          Select an Option
        </label>
        <select
          id="dropdown"
          name="option"
          value={formData.option}
          onChange={handleChange}
          className="w-full border-gray-300 rounded-lg shadow-sm p-2 mb-3 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="option1">Web dev</option>
          <option value="option2">AI</option>
          <option value="option3">Data Analysis</option>
          <option value="option2">Cyber Security</option>
          <option value="option3">Cloud</option>
        </select>
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="terms"
          name="terms"
          checked={formData.terms}
          onChange={handleChange}
          className="h-4 w-4 text-blue-600 border-gray-300  rounded focus:ring-blue-500"
          required
        />
        <label htmlFor="terms" className="text-sm text-white">
          I agree to the terms of service
        </label>
      </div>

      <button className="w-full p-3 bg-blue-600 text-white rounded-3xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500
            bg-gradient-to-r from-sky-400 via-blue-500 to-pink-500 transition duration-300
              hover:from-sky-600 hover:via-blue-600 hover:to-pink-600">
        Submit
      </button>
     
    </div>
    
  </div>
    </div>
    </form>


    </section>
      <Outlet/>
     
    </div>
 
  )
}

export default Contact

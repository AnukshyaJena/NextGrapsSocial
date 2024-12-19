import React,{useState} from 'react';
import { Outlet} from 'react-router-dom';
import ImageGallery from '../components/ImageGallery';
import '../index.css';
import Header from '../components/Header';
import mapimage from '../images/robot1.png';
import ImageSlider from '../components/ImageSlider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube, faWhatsapp, faPinterest } from '@fortawesome/free-brands-svg-icons';
import ClientImageSlider from '../components/ClientImageSlider';
import ClientContactSection from '../components/ClientContactSection';

const Home = () => {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subject: '',
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
    if (!formData.message) newErrors.message = 'Message cannot be empty';
    if (!formData.subject) newErrors.message = 'Message cannot be empty';

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
        message: '',
        subject: '',
        terms: false,
      });
    } else {
      console.log('Form has errors');
    }
  };
  return (
    <div className="">
      {/* Header Section */}
      <section className="min-h-screen flex flex-col  bg-[url('/src/images/homepage.webp')] bg-cover bg-center h-screen w-screen">
      <Header/>
        <div className="tcontainer mx-auto px-4 py-7 flex-grow">
          <h1 className="text-md tracking-[10px] text-white ml-14 mt-20"> THE FUTURE TECH SERVICE </h1>
          <div className="flex-1 overflow-visible">
          <div className="absolute text-center top-40 text-5xl tracking-[8px] font-bold">
            {/* Bottom Layer for "GRAPS NEXT SOCIAL" (Sky color) */}
            <span className="absolute top-1 left-0 text-pink-600 text-5xl">
              GRAPS NEXT SOCIAL
            </span>

            {/* Top Layer for "GRAPS NEXT SOCIAL" (White color) */}
            <span className="relative text-white">
              GRAPS NEXT SOCIAL
            </span>
          </div>
        </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-violet-600 text-center" id="aboutsection">
        <div className="container mx-auto px-6">
          
        <div className='relative text-4xl tracking-[4px] text-white ml-5 mt-10 font-bold'>
          <span className="absolute top-0 ml-1 text-pink-500 text-4xl">
            ABOUT US
          </span>
          {/* Top Layer for "LETS GET" (White color) */}
          <span className="relative">
            ABOUT US
          </span>
          
          </div>
          <p className="text-lg text-white mb-4 py-20">
              
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit quam et, molestias eligendi blanditiis
           soluta expedita magni. Illum vel cumque quidem est, fugiat impedit libero modi iste exercitationem
            expedita architecto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consectetur corrupti distinctio, 
            sed doloremque aliquam eos magni cupiditate in provident dolore ducimus neque aliquid quos soluta a odit cum nemo?
          </p>
          <button className="mt-2 px-4 py-2 bg-gradient-to-r from-sky-400 via-blue-500 to-pink-500 hover:bg-purple-700 text-white font-semibold rounded-lg transition duration-300
               hover:from-sky-600 hover:via-blue-600 hover:to-pink-600">
            LEARN MORE
          </button>
          <p className="text-xs tracking-[10px] text-white text-center py-20">
            LETS BUILD YOUR DREAM TOGETHER
        </p>
        </div>
      </section>
      {/* Services Section */}
      <section className="py-20  bg-violet-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold  text-white text-shadow">SERVICES</h2>
          <ImageGallery/>
              <button className="bg-purple-600 text-md mt-10 text-white py-3 px-3 rounded-full bg-gradient-to-r from-sky-400 via-blue-500 to-pink-500 transition duration-300
              hover:from-sky-600 hover:via-blue-600 hover:to-pink-600">
                LEARN MORE
              </button>
        </div>
      </section>

      {/* Serve Section */}
      <section className="px-20 py-40 bg-[url('/src/images/map.jpeg')] bg-cover bg-center h-screen w-screen">
      <div className="flex items-start justify-center">
        <h1 className="text-2xl font-semibold text-white tracking-[10px] text-center">WE SERVE ALL OVER THE WORLD</h1>
      </div>
      </section>

      {/*another section*/}

      <section className="px-4 py-16 bg-violet-600 md:px-20 md:py-60">
  <div className="flex flex-col md:flex-row items-start justify-center space-y-10 md:space-y-0">
    {/* Left Section - Image */}
    <div className="w-full md:w-1/2">
      <img
        src={mapimage}
        alt="Map"
        className="w-full h-auto mt-6 rounded-lg shadow-lg"
      />
    </div>

    {/* Right Section - Content */}
    <div className="w-full md:w-1/2 flex flex-col items-start space-y-6 md:space-y-4">
      <h4 className="text-lg md:text-xl font-bold tracking-[6px] text-white ml-2 md:ml-7">
        HOW WE WORK
      </h4>
      <h2 className="text-2xl md:text-3xl font-bold text-white">
        GET STARTED WITH JUST A FEW CLICKS
      </h2>
      <div>
        <ol className="space-y-6">
          <li className="flex items-center tracking-[1px] text-lg md:text-xl text-white font-semibold">
            <span className="inline-flex items-center justify-center w-10 h-10 bg-white text-black font-bold rounded-xl mr-3">
              01
            </span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit
          </li>
          <li className="flex items-center tracking-[1px] text-lg md:text-xl text-white font-semibold">
            <span className="inline-flex items-center justify-center w-10 h-10 bg-white text-black font-bold rounded-xl mr-3">
              02
            </span>
            Reprehenderit, maiores? dolor sit amet to be safe
          </li>
          <li className="flex items-center tracking-[1px] text-lg md:text-xl text-white font-semibold">
            <span className="inline-flex items-center justify-center w-10 h-10 bg-white text-black font-bold rounded-xl mr-3">
              03
            </span>
            Lorem, ipsum dolor sit amet, Reprehenderit, maiores?
          </li>
        </ol>
      </div>
    </div>
  </div>
</section>


      {/*Image Slider Section*/}
      <section className="px-20 py-40 bg-[url('/src/images/background.jpeg')] bg-cover bg-center h-screen w-screen"> 
        <ImageSlider/>
      </section>


    {/*Clinet Section*/}
    <section class="px-20 py-40 bg-[url('/src/images/b1.jpg')] bg-cover bg-center h-screen w-screen">
      <ClientImageSlider/>
    </section>

      {/* Contact Section */}
      <section className="py-20 bg-[url('/src/images/gradient.avif')] bg-cover bg-center h-full">
  <div className="flex flex-col md:flex-row h-auto md:h-screen">
    {/* Left Side: Image */}
    <div className="flex-1 overflow-visible mb-10 md:mb-0">
      <div className="relative text-2xl md:text-4xl tracking-[4px] md:tracking-[8px] text-white ml-4 md:ml-10 mt-10 md:mt-60 font-bold">
        <span className="absolute top-1 left-1 text-sky-300">LETS GET IN TOUCH</span>
        <span className="relative">LETS GET IN TOUCH</span>
      </div>
      <div className="flex flex-row gap-4 md:gap-6 mt-10 md:mt-80 items-center justify-center">
        <FontAwesomeIcon icon={faFacebook} size="2x" color="#4267B2" />
        <FontAwesomeIcon icon={faInstagram} size="2x" color="#E4405F" />
        <FontAwesomeIcon icon={faWhatsapp} size="2x" color="#25D366" />
        <FontAwesomeIcon icon={faYoutube} size="2x" color="#FF0000" />
        <FontAwesomeIcon icon={faPinterest} size="2x" color="#E60023" />
      </div>
    </div>

    {/* Right Side: Form */}
    <form
      className="w-full md:w-1/2 p-4 md:p-8 space-y-4 bg-[url('/src/images/right.jpeg')] bg-cover bg-center rounded-lg shadow-lg mx-4 md:mx-0"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl md:text-3xl font-semibold text-center text-white">Quick Contact</h2>

      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-white">Your Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full mt-2 p-3 border border-gray-300 bg-transparent text-white rounded-3xl focus:ring-2 focus:ring-blue-500"
          placeholder="Name"
          required
        />
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-white">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full mt-2 p-3 border border-gray-300 bg-transparent text-white rounded-3xl focus:ring-2 focus:ring-blue-500"
          placeholder="Email"
          required
        />
      </div>

      {/* Subject Field */}
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-white">Number</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full mt-2 p-3 border border-gray-300 bg-transparent text-white rounded-3xl focus:ring-2 focus:ring-blue-500"
          placeholder="Number"
        />
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-white">Your Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          className="w-full mt-2 p-3 border border-gray-300 bg-transparent text-white rounded-3xl focus:ring-2 focus:ring-blue-500"
          placeholder="Message"
          required
        ></textarea>
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          className="w-full p-3 bg-gradient-to-r from-sky-400 via-blue-500 to-pink-500 text-white rounded-3xl transition duration-300 hover:from-sky-600 hover:via-blue-600 hover:to-pink-600"
        >
          Send
        </button>
      </div>
    </form>
  </div>

</section>



  {/*Last Section*/}
  <section className="px-20 py-40 bg-violet-600">
   
      <ClientContactSection/>
    
  </section>

  <Outlet />


  </div>
    
  );
}

export default Home;


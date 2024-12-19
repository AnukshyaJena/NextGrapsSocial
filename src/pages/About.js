import React from 'react';
import {  Outlet } from 'react-router-dom';
import '../index.css';
import Header from '../components/Header';

const About = () => {
  return (
    <div>
      {/* Header Section */}
      <Header /> {/* This will render the Header component */}

      {/* About Section with Full Violet Background */}
      <section className="py-20 bg-violet-600 text-center min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-6">
          {/* Main About Content */}
          <div className="relative text-4xl tracking-[4px] text-white ml-5 mt-10 font-bold">
            <span className="absolute top-0 ml-1 text-pink-500 text-4xl">
              ABOUT US
            </span>
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
            LET'S BUILD YOUR DREAM TOGETHER
          </p>
        </div>
      </section>
      <Outlet /> {/* This will render any child routes (if applicable) */}
    </div>
  );
};

export default About;

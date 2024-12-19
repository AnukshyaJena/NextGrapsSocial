import React from 'react'
import { Outlet} from 'react-router-dom';
import '../index.css';
import ImageGallery from '../components/ImageGallery';
import Header from '../components/Header';

const Services = () => {
  return (
    <div>
     
      <section className="py-20  bg-violet-600">
      <Header/>
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold  text-white text-shadow">SERVICES</h2>
          
          <ImageGallery/>
              <button className="bg-purple-600 text-md mt-10 text-white py-3 px-3 rounded-full bg-gradient-to-r from-sky-400 via-blue-500 to-pink-500 transition duration-300
              hover:from-sky-600 hover:via-blue-600 hover:to-pink-600">
                LEARN MORE
              </button>
        </div>
      </section>
      <Outlet/>
    </div>
  )
}

export default Services

import React from 'react'
import { Outlet} from 'react-router-dom';
import '../index.css';
import Header from '../components/Header';

const Career = () => {
  return (
    <div>
      <section className="min-h-screen flex flex-col  bg-[url('/src/images/career.png')] bg-cover bg-center h-screen w-screen">
      <Header/>
      <div className=" mx-auto px-4 py-28 flex-grow">
      <h1 className="text-md tracking-[10px] text-white ml-14 mt-10"> THE FUTURE TECH SERVICE </h1>
      </div>
      </section>
      <Outlet/>
     
    </div>
   
  )
}

export default Career

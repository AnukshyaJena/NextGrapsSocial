import React from 'react'
import { Outlet} from 'react-router-dom';
import Header from '../components/Header';

const industries = () => {
  return (
    <div>
      <section className="min-h-screen flex flex-col  bg-[url('/src/images/laptop.jpg')] bg-cover bg-center h-screen w-screen">
      <Header/>
      <div className=" mx-auto px-4 py-28 flex-grow">
          <h1 className="text-md tracking-[10px] text-white ml-32 mt-8"> THE FUTURE TECH SERVICE </h1>
          <div className="flex-1 overflow-visible">
          <div className="absolute text-center mt-10 ml-10 text-5xl tracking-[10px] font-bold">
            {/* Bottom Layer for "GRAPS NEXT SOCIAL" (Sky color) */}
            <span className="absolute top-1 left-0 text-pink-500 text-5xl">
              WE CREATE WE PROVIDE
            </span>

            {/* Top Layer for "GRAPS NEXT SOCIAL" (White color) */}
            <span className="relative text-white">
              WE CREATE WE PROVIDE
            </span>
          </div>
        </div>
        
      </div>
      </section>
      <Outlet/>
    </div>
  )
  
}

export default industries

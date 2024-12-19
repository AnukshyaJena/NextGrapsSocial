import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'



const Products = () => {
  return (
    <div>
      <section className="min-h-screen flex flex-col  bg-[url('/src/images/product.jpeg')] bg-cover bg-center h-screen w-screen">
      <Header/>
      <div className=" mx-auto px-4 py-28 flex-grow">
          <h1 className="text-md tracking-[10px] text-white ml-14 mt-10"> THE FUTURE TECH SERVICE </h1>
          <div className="flex-1 overflow-visible">
          <div className="absolute text-center mt-20 text-5xl tracking-[10px] font-bold">
            {/* Bottom Layer for "GRAPS NEXT SOCIAL" (Sky color) */}
            <span className="absolute top-1 left-0 text-sky-500 text-5xl">
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

export default Products

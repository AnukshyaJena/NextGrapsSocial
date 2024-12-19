import React from 'react'
import ImageSlider from '../components/ImageSlider';
import { Outlet} from 'react-router-dom';
import Header from '../components/Header';

const Blog = () => {
  return (
    <div>
       
         {/*Image Slider Section*/}
         <section className="px-20 py-40 bg-[url('/src/images/background.jpeg')] bg-cover bg-center h-screen w-screen"> 
         <Header/>
        <ImageSlider/>
        <Outlet/>
      </section>
    </div>
  )
}

export default Blog


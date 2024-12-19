import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services'; 
import Products from './pages/Products';
import Industries from './pages/Industries';
import Blog from './pages/Blog';
import Career from './pages/Career';
import Contact from './pages/Contact';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/> 
      <Route path='/about' element={<About key={Date.now()} />} />
      <Route path='/services' element={<Services />}/>
      <Route path='/products' element={<Products />} />
      <Route path='/industries' element={<Industries />}/>
      <Route path='/blog' element={<Blog />}/>
      <Route path='/career' element={<Career />}/>
      <Route path='/contact' element={<Contact />}/>
    
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


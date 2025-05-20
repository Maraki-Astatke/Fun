import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './home';
import {Contact} from './contact';
import { Blog } from './blog';

export default function Navbar() {
  return (
    <Router>
      <div className="flex justify-between bg-white items-center p-4">
        <h1 className="text-xl font-semibold text-[#1b2343cc] ">MEMORY</h1>
        <nav className='flex gap-6 text-lg  text-[#1b2343cc]'>
          <Link to='/'>HOME</Link>
          <Link to='/blog'>PLACES</Link>
          <Link to='/contact'>CONTACT</Link>
        </nav>
      </div>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
      
      </Routes>
    </Router>
  );
}
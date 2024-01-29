/*
Assignment 1
Donna Marie Brar
301369346
January 28, 2024
*/

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../src/assets/logo.svg';
import Menu from '../src/assets/menu.svg';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className='p-6 uppercase text-sm tracking-wider flex justify-between items-center relative'>
        <button onClick={toggleMenu} className="lg:hidden transition-all ease-in-out">
          <img src={Menu} alt="Menu" className={`h-5 transition-all ease-in-out ${isMenuOpen ? 'rotate-90' : ''}`}  />
        </button>
        <Link to="/">
          <img src={Logo} alt="Logo" className='h-5' />
        </Link>
        <div className={`${isMenuOpen ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row gap-6 bg-white lg:bg-transparent absolute lg:static top-16 lg:top-0 p-6 lg:p-0 z-50 rounded-2xl w-11/12 lg:w-auto shadow-md lg:shadow-none`}>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link to="/services" onClick={() => setIsMenuOpen(false)}>Services</Link>
          <Link to="/projects" onClick={() => setIsMenuOpen(false)}>Projects</Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
        </div>
      </nav>
    </>
  );
}
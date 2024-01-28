import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../src/assets/logo.svg';

export default function Layout() {
  return (
    <>
      <nav className='p-6 uppercase text-sm tracking-wider flex gap-6 flex-wrap flex-row justify-between items-center'>
        <Link to="/">
          <img src={Logo} alt="Logo" className='h-5' />
        </Link>
        <div className='flex gap-6 flex-wrap flex-row'>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
      
    </>
    
  );
}
import React from 'react';
import { Link } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/services">Services</Link>| <Link to="/projects">Projects</Link>| <Link to="/contact">Contact</Link>
      </nav>
      
    </>
    
  );
}
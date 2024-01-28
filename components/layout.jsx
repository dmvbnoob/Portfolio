import React from 'react';
import { Link } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/education">Education</Link>| <Link to="/project">Project</Link>| <Link to="/contact">Contact</Link>
      </nav>
         <br/>
      <hr />
      
    </>
    
  );
}
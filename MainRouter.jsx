/*
Assignment 1
Donna Marie Brar
301369346
January 28, 2024
*/

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './src/about'
import Contact from './src/contact'
import Services from './src/services'
import Projects from './src/projects'
import Layout from './components/layout'

const MainRouter = () =>
{
    return (<div>
        <Layout/>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/services" element={<Services />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route exact path="/contact" element={<Contact />} />
        </Routes>
    </div>)
}

export default MainRouter

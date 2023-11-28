import React from 'react'
import Footer from '../components/footer'
import Parallax from '../components/parallax'
import '../css/about.css'
import Testimonials from '../components/testimonials'
import Welcome from '../components/welcome'
import Staff from '../components/staff'

const About = () => {


  return (
    <>
    <Parallax Page='About Us'/>
    
    <Welcome />
    <div className="container">
        <Staff />

        <Testimonials />    

    </div>
    <Footer /> 
    </>
  )
}

export default About

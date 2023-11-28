import React from 'react'
import Testimonials from '../components/testimonials'
import Footer from '../components/footer'
import Parallax from '../components/parallax'
import Companies from '../components/companies'

const Clients = () => {
  return (
    <>
    <Parallax Page='Our Clients' />
    <Companies />
     <Testimonials />
     <Footer /> 
    </>
  )
}

export default Clients

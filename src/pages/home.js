import React from 'react'
import '../css/home.css'
import Footer from '../components/footer'
import Testimonials from '../components/testimonials'
import Parallax from '../components/parallax'
import Welcome from '../components/welcome'
import Staff from '../components/staff'

const Home = () => {

  const plans = [
    { name: 'Basic Plan', desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.', link: '/', price: '49' },
    { name: 'Beginner Plan', desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.', link: '/', price: '79' },
    { name: 'Premium Plan', desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.', link: '/', price: '109' },
    { name: 'Ultimate Plan', desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.', link: '/', price: '149' },
  ]

  return (
    <>
    <Parallax Page='Home' />
    <Welcome />
    <Parallax Page='Counter'/>
    <div className='container-fluid'>
      <Staff />
    
      <h6><span>Our Pricing</span></h6>
      <h1>Pricing & Packages</h1>
      <div className="pricing-container">
        {
          plans.map((element, index) => {
            const { name, desc, link, price } = element;
            return (              
              <div className='pricing-box' key={index}>
                <h5>{ name }</h5>
                <h1><sup>$</sup><span>{ price }</span></h1>
                <p>{ desc }</p>
                <a href={ link } className='plans-button'>Get Started</a>
              </div>
            )
          })
        }
      </div>
    </div>
    <Testimonials />
    <Footer />
    </>
  )
}

export default Home

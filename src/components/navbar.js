import React from 'react'
import logo from '../assets/Logo3.png';
import '../css/navbar.css';
import { Link } from 'react-router-dom';



const Navbar = () => {

    const navLinks = [
        { label: 'Home', link: '/' },
        { label: 'Services', link: '/services' },
        { label: 'Clients', link: '/clients' },
        { label: 'Projects', link: '/projects' },
        { label: 'Contact', link: '/contact' },
        { label: 'About', link: '/about' },
    ];

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <a href="/"><img className="brand" src= { logo } alt='logo' /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            {navLinks.map((element, index) => {
                const {label, link} = element;
                return (
                    <li className="nav-item" key={index}>
                        <Link className="nav-link" to={ link }>{ label }</Link>
                    </li>                        
                )
            })
            }
            </ul>
        </div>
    </nav> 
    </>
  )
}

export default Navbar

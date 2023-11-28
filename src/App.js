import React from 'react'
import Navbar from './components/navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Contact from './pages/contact';
import About from './pages/about';
import Services from './pages/services';
import Clients from './pages/clients';
import Project from './pages/project';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={ <Home /> }></Route>
        <Route path='/contact' element={ <Contact  /> }></Route>
        <Route path='/about' element={ <About />}></Route>
        <Route path='/services' element={ <Services /> }></Route>
        <Route path='/clients' element={ <Clients /> } ></Route>
        <Route path='/projects' element={ <Project/> } ></Route>
      </Routes>
    </Router>
  )
}

export default App

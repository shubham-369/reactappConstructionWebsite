import React from 'react';
import '../css/services.css';
import Parallax from '../components/parallax';
import Footer from '../components/footer';
import { MdConstruction } from "react-icons/md";
import { BsFillBuildingsFill } from "react-icons/bs";
import { GrUserWorker } from "react-icons/gr";
import { BsGraphUpArrow } from "react-icons/bs";
import { HiHomeModern } from "react-icons/hi2";
import { TbGeometry } from "react-icons/tb";

const Services = () => {

    const services = [
        {serviceName: 'Construction Services', icon: <MdConstruction />, details: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind.', link: '#'},
        {serviceName: 'Infrastructure Services', icon: <BsFillBuildingsFill />, details: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind.', link: '#'},
        {serviceName: 'Architecture Services', icon: <GrUserWorker />, details: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind.', link: '#'},
        {serviceName: 'Budget Planning', icon: <BsGraphUpArrow />, details: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind.', link: '#'},
        {serviceName: 'Interior & Exterior Design', icon: <HiHomeModern />, details: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind.', link: '#'},
        {serviceName: 'Project Planning', icon: <TbGeometry />, details: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind.', link: '#'},
    ]

  return (
    <>
     <Parallax Page='Our Services' /> 
     <div className="container">
        <div className="row service-boxes">

            {
                services.map((element, index) => {
                    const {serviceName, icon, details, link} = element;
                    return (
                        <div className="col-md-4 col-12" key={index}>                
                            <span>{icon}</span>
                            <div className='details'>
                                <h2>{serviceName}</h2>
                                <p>{details}</p>
                                <a href={link} className='btn service-button'>LEARN MORE</a>
                            </div>
                        </div>                        
                    )
                })
            }

        </div>
     </div>
     <Footer />
    </>
  )
}

export default Services

import React from 'react'
import '../css/about.css'
import { MdConstruction } from "react-icons/md";

const Welcome = () => {

    
    const services = [
        {icon: <MdConstruction />, service: 'Construction', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'},
        {icon: <MdConstruction />, service: 'Architecture', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'},
        {icon: <MdConstruction />, service: 'Consulting', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'},
        {icon: <MdConstruction />, service: 'Mechanical', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'},
    ]


  return (
    <>
        <div className="container">
            <div className='row about-row'>
                <div className='col-md-5 col-12'>
                    <div className="image">                
                        <img src="https://images.pexels.com/photos/5493672/pexels-photo-5493672.jpeg?auto=compress&cs=tinysrgb&w=600" alt="about-img" />
                    </div>
                </div>
                <div className='col-md-7 col-12'>
                    <h5><span>Welcome to Maharastra Ltd.</span></h5>
                    <h1>Quality and Affordable Constructor</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas reiciendis omnis voluptates ex praesentium labore. Distinctio dolor, cumque nesciunt ea aliquam est vitae non dolorum, ullam, omnis quae totam debitis!</p>
                    
                    <h3>We Can Help You</h3>
                    <div className="about-services"> 
                        {
                            services.map((element, index) => {
                                const {icon, service, desc} = element;
                                return (                                
                                    <div className='ServiceBox' key={index}>
                                        <span>{ icon }</span>
                                        <div>
                                            <h4>{ service }</h4>
                                            <p>{ desc }</p>
                                        </div>
                                    </div>  
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div> 
    </>
  )
}

export default Welcome

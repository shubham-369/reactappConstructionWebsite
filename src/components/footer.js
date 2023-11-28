import React from 'react'
import '../css/footer.css';
import logo from '../assets/Logo2.png'

const Footer = () => {
  return (
    <>
     <div className="footer">
        <div className="container">
            <div className="row footer-row">
                <div className="col-md-6 col-12">
                    <img src={ logo } className='logo' alt="logo" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et esse doloribus hic sit repudiandae rerum illum voluptates repellendus, necessitatibus eaque nostrum optio eius. Necessitatibus fuga repellat quidem deserunt velit perferendis?.</p>
                </div>
                <div className="col-md-6 col-12">
                    <h1><span>PERSONAL DETAILS</span></h1>
                    <li><b>Email:</b> shubham.srivastav666@gmail.com</li>
                    <li><b>Phone:</b> +91 8864981131</li>
                    <li><b>Linkedin:</b> <a href="www.linkedin.com/in/shubham-srivastav-879761249">linkedin/in/shubham</a></li>
                </div>
            </div>
        </div>
     </div> 
    </>
  )
}

export default Footer

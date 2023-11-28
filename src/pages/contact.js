import React, { useState } from 'react'
import Parallax from '../components/parallax'
import '../css/contact.css'
import axios from 'axios'
import Footer from '../components/footer'

const Contact = () => {

  const initialData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }
  const [data, setData] = useState(initialData);


  async function sendEmail(e){
    e.preventDefault();
    const emailData = new FormData(e.target);
    console.log(emailData);
    try {
      await axios.post('http://localhost:3300/sendEmail', emailData,    
      { headers: {
          'Content-Type': 'application/json',
        }
      });
      window.alert('We have recieved your Email');
      
    } catch (error) {
      console.log(error);
      window.alert('Sorry message can not be sent!');
    }
    setData(initialData);
  }


  const formTags = [
    {type: 'text', placeholder: 'Your Name', name: 'name'},
    {type: 'email', placeholder: 'Your Email', name: 'email'},
    {type: 'text', placeholder: 'Subject', name: 'subject'},
    {placeholder: 'Message', name: 'message'}
  ]
  return (
    <>
     <Parallax Page='Contact Us' /> 
     <div className='container'>  
      <h1>Contact Information</h1>
      <div className='contact-info'>
          <div>
            <h4> Address: <span className='address'>Thane, Maharastra</span>  </h4>
          </div>
          <div>
            <h4> Phone: <span>+91 8888888888</span> </h4>
          </div>
          <div>
            <h4> Email: <span>Maharastra@info.com </span></h4>
          </div>
          <div>
            <h4> Website: <span>maharastraltd.com</span> </h4>
          </div>
      </div>

      <div className='row contact-row'>
        <div className='col-md-6 col-12'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2254.771734925437!2d72.95381629173572!3d19.203978296008938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b90c5b60c117%3A0x66e8f733cea69d0!2sDMart%20Corporate%20Office!5e0!3m2!1sen!2sin!4v1700906645219!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className='col-md-6 col-12'>
          <form action="#" onSubmit={sendEmail}>
            {
              formTags.map((element, index) => {
                const { type, placeholder, name } = element
                return (
                  name === 'message' ? (
                    <textarea name={name}  className="form-control" rows="6" placeholder={placeholder} value={data[name]} onChange={(e) => setData({ ...data, [ name ]: e.target.value})}  key={index} required></textarea>
                  ):(
                    <input type={type}  name={name} className="form-control" value={data[name]} onChange={(e) => setData({ ...data, [ name ]: e.target.value})}  placeholder={placeholder} key={index} required/>
                  )
                )
              })              
            }
              <button type='submit' className='btn contact-btn'>Send Message</button>
          </form>
        </div>
       </div> 

     </div>
     <Footer />
    </>
  )
}

export default Contact

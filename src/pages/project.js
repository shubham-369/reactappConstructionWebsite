import React from 'react'
import Parallax from '../components/parallax'
import Footer from '../components/footer'
import '../css/project.css'
import Evideo from '../videos/E-Commerce.mp4'
import Cvideo from '../videos/ChatApp.mp4'
import Expvideo from '../videos/ExpenseApp.mp4'
import { IoLogoGithub } from "react-icons/io";

const Project = () => {

  const projectRender = [
    {title: 'E-Commerce Website', videoSrc: Evideo, git: 'https://github.com/shubham-369/Ecommerce-Website-MERN',
    line1: ` Implemented Node.js and Express.js on the backend, optimizing server response time by 50% and increasing overall system performance.`,
    line2: `Revamped the frontend of the web application using React.js, JSX, and CSS, resulting in a 40% increase in user engagement and a 25% decrease in bounce rate.`,
    line3: `Engineered a cutting-edge online shop application with dual database versions, leveraging Sequelize for SQL and Mongoose for MongoDB; enhanced scalability and flexibility, resulting in a 40% increase in overall user satisfaction and adoption.`,
    line4: `Simplified admin tasks for product management and optimized user interactions, cart management, and checkout processes.`},

    {title: 'Chat App', videoSrc: Cvideo, git: 'https://github.com/shubham-369/chatApp/tree/chatAppBackend',
    line1:`Implemented JWT-based secure login, .env file usage for data protection, and a
    robust 'forgot password' feature, ensuring comprehensive user data security.`,
    line2:`Introduced enhanced messaging features, efficient user management, and realtime chats using Socket.io, fostering seamless and engaging user experiences.
    `,
    line3:`CronJob were used to automate processes, improving system efficiency and user
    comfort.`,
    line4:`Enabled Socket.io for instant communication, ensuring a quicker, more
    interactive platform experience for users.`},

    {title: 'Expense App', videoSrc: Expvideo, git: 'https://github.com/shubham-369/expenseApp',
    line1:`Accelerated system performance by 50% using Node.js and Express.js.
    Leveraged Axios for faster server communication, ensuring a more responsive
    frontend`,
    line2:`Developed a feature-rich expense management application with separate
    versions, one using Sequelize for SQL and another using Mongoose for MongoDB.`,
    line3:`Created an advanced expense manager using Sequelize for SQL and Mongoose
    for MongoDB, broadening accessibility`,
    line4:`Expanded the app's capabilities, ensuring easier expense tracking and
    comprehensive reporting for users.`},

  ]

  return (
    <>
     <Parallax Page='Our Projects' />
     <div className="container">
      <div className="project-list">
        {
          projectRender.map((element, index) => {
            const { title, videoSrc, git, line1, line2, line3, line4 } = element;
            return(
              <div className="project" key={ index }>
                <h1>{ title }</h1>
                <div className="video-player">   
                  <video controls>
                      <source src={videoSrc} type="video/mp4" />
                  </video>
                </div>
                <ol type='number'>
                <li>{ line1 }</li>
                <li>{ line2 }</li>
                <li>{ line3 }</li>
                <li>{ line4 }</li>
                  <a href={git} className='github'><IoLogoGithub /></a>
                </ol>

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

export default Project

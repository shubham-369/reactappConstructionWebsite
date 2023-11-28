import React, { useState } from "react";
import "../css/parallax.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Parallax = ({ Page }) => {

  const [countStart, setCountStart] = useState(false);

  const counter = [
    { title: "COMPLETED PROJECTS", data: 3000 },
    { title: "HAPPY CLIENTS", data: 320 },
    { title: "CUP OF COFFEE", data: 1000 },
    { title: "ENGINEERS & STAFF", data: 587 },
  ];

  return (
    <>
      {Page == "Home" ? (
        <div className="parallax-home">
          <div className="parallax-home-details">
            <h1>WE WILL BE HAPPY TO TAKE CARE OF YOUR WORK</h1>
            <div className="buttons">
              <a href="/contact">Contact Us</a>
              <a href="/services">Services</a>
            </div>
          </div>
        </div>
      ) : Page == "Counter" ? (
        <ScrollTrigger onEnter={() => setCountStart(true)} onExit={() => setCountStart(false)}>
          <div className="parallax-counter">
            {counter.map((element, index) => {
              const {data, title} = element;
              return (
                <div className="counter-box" key={index}>
                  <h1>
                  { countStart && <CountUp start={0} end={data} duration={3} delay={0}/> }
                  </h1>
                  <p>{title}</p>
                </div>
              );
            })}
          </div>
        </ScrollTrigger>
      ) : (
        <div className="parallax-container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {Page}
              </li>
            </ol>
          </nav>
          <h1>{Page}</h1>
        </div>
      )}
    </>
  );
};

export default Parallax;

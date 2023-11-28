import React from 'react'
import '../css/companies.css'

const Companies = () => {

    const logos = [
        'https://cdn.worldvectorlogo.com/logos/nvidia.svg',
        'https://cdn.worldvectorlogo.com/logos/larsen-toubro-logo-2.svg',
        'https://cdn.worldvectorlogo.com/logos/burger-king-4.svg',
        'https://cdn.worldvectorlogo.com/logos/skanska.svg',
        'https://cdn.worldvectorlogo.com/logos/tata-steel-logo.svg',
        'https://cdn.worldvectorlogo.com/logos/oltmans-construction.svg',
        'https://cdn.worldvectorlogo.com/logos/logimieux-construction.svg',
        'https://cdn.worldvectorlogo.com/logos/knik-construction.svg',
        'https://cdn.worldvectorlogo.com/logos/hyundai-engineering-construction-logo.svg',
        'https://cdn.worldvectorlogo.com/logos/eiffage-construction.svg',
    ]
  return (
    <>
      <div className="container happyClients">
        <div>
            <h6><span>Companies</span></h6>
            <h1> Our Happy Customers </h1>
        </div>
        <div className='logos'>
            {logos.map((logo, index) => (
            <img key={index} src={logo} alt={`logo-${index}`} />
            ))}
        </div>
      </div>
    </>
  )
}

export default Companies

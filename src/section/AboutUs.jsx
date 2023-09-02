import React from 'react'
import "../styles/about.css"
import AboutData from "../Data/AboutData";

const AboutUs = () => {
  return (
    <section className='AboutUsSection' id='about'>
        {AboutData.map((item, index)=> (
            <div className='cont' key={index}>    
              <div className='AboutItems'>
                <h1 className='AboutHead' data-aos = "fade-up">{item.title}</h1>
                <p className='AboutPara' data-aos = "fade-up">{item.text}</p>
              </div>
            </div>
        ))}
    </section>
  )
}

export default AboutUs
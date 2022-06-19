import React from 'react'
import data from "./../../data/about/about-me.json"
import style from "./about.module.scss"
import aboutImgae from "../../assets/images/about.png"

const AboutMe =() => {
  return (
      <div className='container'>
          <div className='row mb-5'>
              <div className='col-md-6'>
                 
                  <img src={aboutImgae} alt={data.name} className="img-fluid" />
              </div>
              <div className='col-md-6'>
                  <h2 className={style.title}>{ data.name}</h2>
                  <p className={style.descabout}>{ data.description}</p>
              </div>
          </div>
      </div>
  )
}

export default AboutMe
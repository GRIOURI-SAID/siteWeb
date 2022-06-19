import React from 'react'
import hero from "../../assets/images/soulful_living_1.png"
import style from "./Hero.module.scss"

const  Hero  =() =>{
  return (
      <div className='container'>
          <div className={style.hero}>
              <img src={hero} alt="" className=' class="img-fluid"'/>
          </div>
      </div>
  )
}

export default Hero
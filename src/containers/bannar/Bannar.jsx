import React from 'react'
import styles from "./Bannar.module.scss"
import cirulImage from "../../assets/images/Ellipse_1.png"

const  Bannar =()  =>{
  return (
      <div className={styles.bannar}>
          <div className='container'>
              <div className='row'>
                  <div className='col-md-3'>
                      <img src={cirulImage} alt="" />
                  </div>
                  <div className='col-md-6'>
                      <h4 className='text-center mt-5'>Welkom en succes met de cursus <br/> Gyaha !</h4>
                  </div>
                  <div className='col-md-3'>
                      <ul className={`text-center mt-3 ${styles.list}`}>
                          <li>Naam  : Gyha Brooks</li>
                          <li>Date  : 25/05/1997</li>
                          <li>Email  : g.books@gmail.com</li>
                      </ul>
                  
                  </div>

              </div>
          </div>
          
      </div>
  )
}

export default Bannar
import React, { useState } from 'react'
import styles from "./Form.module.scss"

function Forms() {
    const [showlogin, setShowLogin] = useState(true)
    
    const handlShow = () => setShowLogin(true)
    const handlNowShow = () => setShowLogin(false)
  return (
      <div>
          <div className='row m-0 p-0'>
              <div className='col-md-6 m-0 p-0'>
                  <button onClick={handlShow} className={styles.login}>Login</button>
                  
                </div>
              <div className='col-md-6 m-0 p-0'>
                  <button onClick={handlNowShow}  className={styles.register}>Register</button>
                  
              </div>


          </div>
          {showlogin && 
              <div className={styles.fromlogin}>
                  <form>
                      <div className={styles.group}>
                          <div >
                              <label className='mt-2' for="exampleInputEmail1">Naam</label>
                          </div>

                          <div className={`pl-4 ${styles.from}`}>
                              <input type="email" class="form-control " id="exampleInputEmail1" placeholder='Naam .......'></input>
                          </div>
                      </div>
                      

                      <div className={styles.group}>
                          <div >
                              <label className='mt-2' for="exampleInputEmail1">Password</label>
                          </div>

                          <div className={styles.from}>
                              <input type="password" class="form-control" id="exampleInputEmail1" placeholder='Password .......'></input>
                          </div>
                      </div>

                      <div className={styles.radio}>
                          <input type="radio" /> wachtwoord vergeten
                          <br />
                          <input type="checkbox" /> Remember me
                      </div>

                      <div className='text-center'>
                          <button className={styles.btn}>Login</button>
                      </div>

                      

                  </form>



              </div>
          }

          {!showlogin && 
              <div className={styles.registerform}>
             
                  <form>
                      <div className={styles.group}>
                          <div >
                              <label className='mt-2' for="exampleInputEmail1">Naam</label>
                          </div>

                          <div className={`pl-4 ${styles.from}`}>
                              <input type="text" class="form-control " id="exampleInputEmail1" placeholder='Naam .......'></input>
                          </div>
                      </div>

                      <div className={styles.group}>
                          <div >
                              <label className='mt-2' for="exampleInputEmail1">Email</label>
                          </div>

                          <div className={`pl-4 ${styles.from}`}>
                              <input type="email" class="form-control " id="exampleInputEmail1" placeholder='Email .......'></input>
                          </div>
                      </div>


                      <div className={styles.group}>
                          <div >
                              <label className='mt-2' for="exampleInputEmail1">Date </label>
                          </div>

                          <div className={`pl-4 ${styles.from}`}>
                              <input type="date" class="form-control " id="exampleInputEmail1" placeholder='DD/MM/YYYY'></input>
                          </div>
                      </div>


                      <div className={styles.group}>
                          <div >
                              <label className='mt-2' for="exampleInputEmail1">Password</label>
                          </div>

                          <div className={styles.from}>
                              <input type="password" class="form-control" id="exampleInputEmail1" placeholder='Password .......'></input>
                          </div>
                      </div>

                      <div className={styles.radio}>
                          
                          <input type="checkbox" /> Remember me
                      </div>

                      <div className='text-center'>
                          <button className={styles.btn}>Register</button>
                      </div>



                  </form>
              </div>
          
          }
         
          

      </div>
  )
}

export default Forms
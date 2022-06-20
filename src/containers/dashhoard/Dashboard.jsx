import React from 'react'
import User from '../../pages/User'
import Sidbar from '../sibbar/Sidbar'
import UserContent from '../users-content/UserContent'
import styles from "./Dashboard.module.scss"

const  Dashboard  =()  =>{
  return (
      <div className={styles.dashboard}>
          <div >
              <div className={styles.header}>
                 <h1 className='text-center'>Admin overview</h1>
              </div>
              <div className='row'>
                  <div className="col-md-3">
                      <div className={styles.flex}>
                    <Sidbar />
                      </div>
                  </div>

                  <div className='col-md-9'>
                     <UserContent />
                  </div>

              </div>
          
          </div>
      </div>
  )
}

export default Dashboard
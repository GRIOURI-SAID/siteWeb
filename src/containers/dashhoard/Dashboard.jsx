import React, { useState } from 'react'
import User from '../../pages/User'
import Sidbar from '../sibbar/Sidbar'
import UserContent from '../users-content/UserContent'
import styles from "./Dashboard.module.scss"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UploadContent from '../uplaodContent/UploadContent'
import { withRouter } from 'react-router-dom'

const Dashboard = () => {
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    

    
    return (
        <Router>
      <div className={styles.dashboard}>
          <div >
              <div className={styles.header}>
                 <h1 className='text-center'>Admin overview</h1>
              </div>
              <div className='row'>
                  <div className="col-md-3">
                      
                            
                            <div className={styles.flex}>
                                <ul className={styles.btn}>
                                    <li>
                                        <button onClick={handleShow}>
                                            User overviow</button>
                                    </li>
                                    <li>
                                        <button onClick={handleClose}>Uplaod Content</button></li>
                                </ul>
                            </div>
                  </div>

                  <div className='col-md-9'>
                            {show  &&
                               
                            <UserContent />
                            }
                            
                            {!show &&
                                <UploadContent />
                            }
                      

                        
                     
                  </div>

              </div>
          
          </div>
            </div>
            
        </Router>
  )
}

export default Dashboard
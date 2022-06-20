import React, { useRef } from 'react'
import { withRouter } from 'react-router-dom';
import styles from "./Upload.module.scss"
import { FaPaste } from "react-icons/fa";

import imageUpload from "../../assets/images/R.png"


function UploadContent() {
    const fileInputRef = useRef();

    const handleChange = (event) => {
        // do something with event data
        console.log(event)

    }
  return (
      <div className={styles.upload}>
          <div className='conatiner'>
              <p className={styles.title}>Uplaod naar</p>
              <div className={`row ${styles.uploadtop}`}>
                  
                  <div className='col-md-2'>
                      
                      <ul>
                          <li><input type="checkbox" /> Module 1</li>
                          <li><input type="checkbox" /> Module 2</li>
                          <li><input type="checkbox" /> Module 3</li>
                          <li><input type="checkbox" /> Module 4</li>
                      </ul>
                  </div>

                  <div className='col-md-2'>
                      <ul>
                          <li><input type="checkbox" /> Module 1</li>
                          <li><input type="checkbox" /> Module 2</li>
                          <li><input type="checkbox" /> Module 3</li>
                          <li><input type="checkbox" /> Module 4</li>
                      </ul>
                  </div>


                  <div className='col-md-4'>
                      <div class="form-group">
                          <label for="inputEmail4">Name</label>
                          <input width="100%" type="text" class="form-control" id="name" name="name"
                             
                              placeholder="Name ...." />
                      </div>
                  </div>

              
              </div>
             

             

          
          </div>

          <div className={`text-center ${styles.uplaodbutton}`}>
             
              <div className={ ` text-center ${styles.image}`}>
                  <img src={imageUpload} alt="image" onClick={() => fileInputRef.current.click()}></img>
              </div>
              
              
              <input onChange={handleChange} multiple={false} ref={fileInputRef} type='file' hidden />
              <h3>Drag and drop file here to upload</h3>
              <button type='file'>  <FaPaste />Or browser for file </button>
              <p>Maximum uplaod size <span>8.00 MB</span></p>
          </div>
      </div>
  )
}

export default withRouter(UploadContent) 
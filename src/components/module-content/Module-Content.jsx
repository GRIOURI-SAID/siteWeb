import React from 'react'
import { Link } from 'react-router-dom'

import moduleData from '../../data/module/module.json'
import style from "./style.module.scss"
const  ModuleContent =()  =>{
  return (
      <div className='row mb-5'>
          {moduleData.map(module =>
              <div className='col-md-4  col-lg-3 mb-4 '>
                  <div className={style.card} >
                      <div className="card-body text-center">
                          
                          <p class="card-text mb-4">{module.content.substring(0, 60)} </p>
                          <Link to={`/myaccount/${module.id}`}  className={style.btn}>{module.type}</Link>
                          
                      </div>
                  </div>
              </div>
            )}
          
      </div>
  )
}

export default ModuleContent
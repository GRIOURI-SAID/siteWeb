import React from 'react'
import moduleData from '../../data/module/module.json'
import style from "./style.module.scss"
const  ModuleContent =()  =>{
  return (
      <div className='row mb-5'>
          {moduleData.map(module =>
              <div className='col-md-3 mb-4 '>
                  <div className={style.card} >
                      <div className="card-body text-center">
                          
                          <p class="card-text mb-4">{module.content}</p>
                          <a href="#" class={style.btn}>{module.type }</a>
                      </div>
                  </div>
              </div>
            )}
          
      </div>
  )
}

export default ModuleContent
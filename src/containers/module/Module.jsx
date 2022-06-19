import React from 'react'
import ModuleContent from '../../components/module-content/Module-Content'
import style from "./style.module.scss"

function Module() {
    return (
      
        <div className='container'>
            <div className={style.module}>
          <ModuleContent />
            </div>
        </div>
       
  )
}

export default Module
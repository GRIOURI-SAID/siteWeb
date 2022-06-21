import React from 'react'
import ModuleContent from '../../components/module-content/Module-Content'
import styles from "./moduleContent.module.scss"

const  ModuleContents =() =>{
    return (
      <>
            <div className={styles.scroll}>
                <div className='container'>
                    <ModuleContent />
                </div>
          

            </div>

            <div className={`container text-center ${styles.theore}`}>
                <h3>Theorie</h3>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam reiciendis, itaque ipsum nihil exercitationem repellat odit laboriosam. Ad, numquam molestias maiores dolorum libero tenetur at facilis necessitatibus odit modi rem.
            </div>

            <div className={` container ${styles.vedio}`}></div>
            
        </>
  )
}

export default ModuleContents
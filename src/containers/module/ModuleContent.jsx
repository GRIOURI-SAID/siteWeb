import React from 'react'
import ModuleContent from '../../components/module-content/Module-Content'
import styles from "./moduleContent.module.scss"
import data from "../../data/module/module.json"
import {

    useParams
} from "react-router-dom";

const ModuleContents = () => {
    let { id } = useParams();
    if (id == undefined)
      id ="1"
    
    const data2 = data.filter(module => module?.id === id.toString())
    return (
      <>
            <div className={styles.scroll}>
                <div className='container'>
                    <ModuleContent />
                </div>
          

            </div>

            <div className={`container text-center ${styles.theore}`}>
                <h3>Theorie</h3>

                {data2?.map(module =>
                    <div className='container mt-5 text-center'>
                        

                        <div className='content'>
                            <p >{module.content}</p>
                        </div>
                    </div>

                )}
                
            </div>

            <div className={` container ${styles.vedio}`}></div>
            
        </>
  )
}

export default ModuleContents
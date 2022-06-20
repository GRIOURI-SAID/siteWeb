import React from 'react'
import styles from "./Sibbar.module.scss"

const Sidbar =()  =>{
  return (
      <div  className={styles.flex}>
          <ul className={styles.btn}>
              <li><button>User overviow</button></li>
              <li><button>Uplaod Content</button></li>
         </ul>
      </div>
  )
}

export default Sidbar
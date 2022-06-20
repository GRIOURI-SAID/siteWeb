import React from 'react'
import { Link } from 'react-router-dom'
import data from "../../data/users/users.json"
import styles from "./UserContent.module.scss"
import { withRouter } from 'react-router-dom';
const UserContent =() => {
  return (
     <div className={styles.background}>
      
      <table class="table table-striped">
        
          <tbody>
              {data.map((data, key) =>
            
                  <tr key={key}>
                      <td>
                          <div className={styles.image} >
                              <Link to={process.env.PUBLIC_URL + data.url}>
                                  <img
                                      src={require("./../../assets/images/" + data.image)}
                                      alt="voopo voip"
                                  />
                              </Link>
                          </div>
                          
                      </td>
                      <td>
                          <ul className={styles.list}>
                              <li>
                                  Name : {data.name}
                              </li>

                              <li>
                                  Name : {data.date}
                              </li>


                              <li>
                                  Name : {data.email}
                              </li>
                          </ul>
                      </td>
                      <td className='text-center'>
                          Current progress 
                      <br />
                          {data.module}
                      </td>

                      <td className='text-center'>
                          {data.active == "yes" &&
                             <h6 className={styles.title} > <div className={styles.active}></div> Active</h6>
                          }
                          

                          {data.active == "non" &&
                              <h6 className={styles.title} > <div className={styles.inactive}></div>  in-Active  </h6>
                          }
                          <button className={styles.btn}>detete account</button>
                      </td>
                  </tr>
              )}
             
             
          </tbody>
          </table>
          
          </div>
  )
}

export default withRouter(UserContent)
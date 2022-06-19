import React from "react";
import styles from "./AboutContentOne.module.scss";
import aboutImage from "./../../assets/images/about.png"

import { AiOutlinePlus } from "react-icons";
const AboutContentOne = () => {
  return (
  
    <div className="top">
      <div className={styles.abouttop}  >
        <div className="row p-0 m-0">
          <div className="col-12 col-lg-4 p-0">
            <div className="aboutimage">
               <img src={aboutImage}  alt="" />
            </div> 
          </div>


          <div className={`col-12 col-lg-8 ${styles.aboutcontent}`}>
            <div>
              <p>Hello <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quas pariatur quos illo fuga, earum nihil perferendis officiis! Nulla atque consectetur deleniti consequuntur laudantium sunt quia fugit culpa rem non!
                <br />
                <br />

                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est sunt in repellendus officiis, ducimus natus corporis dolores nostrum nesciunt. Hic nostrum ipsa similique inventore delectus alias voluptates necessitatibus voluptas. Quisquam?

                <br />
                <br />

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae odio veniam vel laboriosam! Quo excepturi, corrupti earum facilis id nobis accusamus modi et accusantium temporibus illo dolore, impedit exercitationem eius!
              </p>

              <p>Exemple@gmail.com</p>
              <p>07265265365</p>

              <p className="text-right">socail</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.aboutbutton}>
        <div className="container">
        <h3 className="text-center">Name</h3>
        <div className="infobutton">
          <button className={styles.btn}>+  exemple</button>
          <br />
          <button className={styles.btn}>- exemple</button>
        </div>

          <div className={styles.contentinfo}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, ad? A porro ea debitis at deserunt unde, placeat facere sit alias, magni eum illo velit officiis sed voluptatibus! Quaerat, accusamus?
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, ad? A porro ea debitis at deserunt unde, placeat facere sit alias, magni eum illo velit officiis sed voluptatibus! Quaerat, accusamus?
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, ad? A porro ea debitis at deserunt unde, placeat facere sit alias, magni eum illo velit officiis sed voluptatibus! Quaerat, accusamus?
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, ad? A porro ea debitis at deserunt unde, placeat facere sit alias, magni eum illo velit officiis sed voluptatibus! Quaerat, accusamus?
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, ad? A porro ea debitis at deserunt unde, placeat facere sit alias, magni eum illo velit officiis sed voluptatibus! Quaerat, accusamus?

          <br />

          <br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam ipsam ducimus rem nisi, unde nostrum, explicabo eligendi, quae suscipit impedit tenetur laboriosam laudantium quibusdam eius necessitatibus assumenda quas incidunt quo.

          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit :</p>
         
            <div className="row">
              <div className="col-md-4">
                <ul className={styles.list}>
                  <li> - exemple</li>
                  <li> - exemple</li>
                  <li>- exemple</li>
                </ul>
              </div>
              <div className="col-md-4">
                <ul className={styles.list}>
                  <li> - exemple</li>
                  <li> - exemple</li>
                  <li>- exemple</li>
                </ul>
              </div>
            
            </div>
        
        </div>

        </div>
      </div>
       
      </div>
      
 
  );
};

export default AboutContentOne;

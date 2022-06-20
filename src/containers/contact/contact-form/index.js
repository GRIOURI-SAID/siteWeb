import React from "react";
import styles from "./ContactForm.module.scss";
import Button from "../../../components/UI/button";

import imageContact from "../../../assets/images/about.png"



const ContactForm = () => {
  return (

    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <h6>exemple@gmail.com</h6>
          <h6>08764763662</h6>
          <div className={styles.contactimage}>
            <img src={imageContact} alt="Image" />
          </div>
        </div>

        <div className="col-md-8">
          <div className={styles.voopoContactForm}>
            <h2 className="text-center">
              If you need to contact us, <br /> Please fill out the form below.
            </h2>
            <form>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputEmail4">Name</label>
                  <input type="text" class="form-control" id="name" name="name"

                    placeholder="Name ...." />
                </div>
                <div class="form-group col-md-6">
                  <label for="inputPassword4">Email</label>
                  <input type="email" class="form-control" name='email' placeholder="Email ..." />
                </div>


                <div class="form-group col-md-12">
                  <label for="inputPassword4">Description</label>
                  <textarea name="" id="textarea" class="form-control" rows="7" required="required"></textarea>
                </div>


              </div>

              <div className={styles.btn}>
                <button >Submit</button>
              </div>



            </form>
          </div>
        </div>
      </div>

    </div>


  );
};

export default ContactForm;

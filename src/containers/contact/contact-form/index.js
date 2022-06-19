import React from "react";
import styles from "./ContactForm.module.scss";



const ContactForm = () => {
  return (
    <div className="voopo__contact ptb--110">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-5 offset-lg-1">
            <div className={styles.contactThumb}>

            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className={styles.voopoContactForm}>
              <h2>
                If you need to contact us, Please fill out the form below.
              </h2>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactForm;

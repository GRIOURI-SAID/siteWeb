import React, { useState } from "react";

import Navigation from "../../components/header/Navigation";

import MobileMenu from "../../components/header/MobileMenu";
import styles from "./Header.module.scss";
import Logo from "../../components/header/Logo";
import { FaUserCircle } from "react-icons/fa";
import Modal from 'react-bootstrap/Modal'
import Forms from "../forms/Forms";

const Header = () => {
  const [show, setShow] = useState(false);

  return (
    <header
      className={styles.headerArea}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-6 col-lg-3">
            {/* logo */}
            <Logo />
          </div>
          <div className="col-lg-7 d-none d-lg-block">
            {/* navigation */}
            <Navigation />
          </div>
          <div className="col-6 col-lg-2 account">
            <ul className={styles.account}>
              <span onClick={() => setShow(true)}> My Account <FaUserCircle /></span>
            </ul>


          </div>
        </div>
        {/* Mobile Menu */}
        <MobileMenu styles={styles} />
      </div>

      <Modal

        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Body
          className={styles.Modal}
        >
          <Forms />

        </Modal.Body>
      </Modal>
    </header >
  );
};

export default Header;

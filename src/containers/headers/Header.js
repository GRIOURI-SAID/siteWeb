import React from "react";

import Navigation from "../../components/header/Navigation";

import MobileMenu from "../../components/header/MobileMenu";
import styles from "./Header.module.scss";
import Logo from "../../components/header/Logo";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {


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
              My Account <FaUserCircle />
            </ul>


          </div>
        </div>
        {/* Mobile Menu */}
        <MobileMenu styles={styles} />
      </div>
    </header >
  );
};

export default Header;

import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.scss"


const Logo = () => {
  return (
    <div className={styles.logo}>
      <Link to={process.env.PUBLIC_URL + "/"}>
        <h2>Your LOGO</h2> 
      </Link>
    </div>
  );
};

export default Logo;

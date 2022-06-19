import React from "react";
import styles from "./Navigation.module.scss";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul className={styles.mainMenu}>
        <li className={styles.drop}>
          <Link to={process.env.PUBLIC_URL + "/"}>
            Home
          </Link>
        </li>

        <li>
          <Link to={process.env.PUBLIC_URL + "/about"}>About</Link>
        </li>

        <li>
          <Link to={process.env.PUBLIC_URL + "/contact"}>Contact</Link>
        </li>

        <li>
          <Link to={process.env.PUBLIC_URL + "/course"}>Course</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

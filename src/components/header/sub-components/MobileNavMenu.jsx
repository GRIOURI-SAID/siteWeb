import React from "react";
import { Link } from "react-router-dom";

const MobileNavMenu = ({ styles }) => {
  return (
    <nav className={styles.offcanvasNavigation} id="offcanvas-navigation">
      <ul>
        <li className={styles.menuItemHasChildren}>
          <Link to={process.env.PUBLIC_URL + "/"}>Home</Link>
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

export default MobileNavMenu;

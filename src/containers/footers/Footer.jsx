import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { animateScroll } from "react-scroll";
import { IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io";
import { MdExpandLess } from "react-icons/md";

import styles from "./Footer.module.scss";


const Footer = ({ footerBg }) => {
  const [scroll, setScroll] = useState(0);
  const [top, setTop] = useState(0);

  useEffect(() => {
    setTop(100);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  return (
    <footer
      className={`footer-area ${footerBg === "white" ? styles.footer2 : ""}`}
    >
      <div
        className={`${styles.footerTop} ${
          footerBg === "white" ? "bg--cart-7" : "bg--cart-2"
        }`}
      >
        <div className="container">
          <div className="row">
            {/* Start Single Wedget */}
            <div className="col-12 col-sm-6 col-lg-3">
              <div className={styles.singleWidget}>
                <div className={styles.logo}>
                  <Link to={process.env.PUBLIC_URL + "/"}>
                     Your Logo
                  </Link>
                </div>
              
              </div>
            </div>
            {/* End Single Wedget */}
            {/* Start Single Wedget */}
            <div className="col-12 col-sm-6 col-lg-2 offset-lg-1 xs__mt--40">
              <div className={styles.singleWidget}>
                
                <ul className={styles.ftContactLink}>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "#/"}>
                     Contact
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "#/"}>
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "#/"}>
                     Privacy
                    </Link>
                  </li>
                 
                  <li>
                    <Link to={process.env.PUBLIC_URL + "#/"}>
                    Terms and conditions
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* End Single Wedget */}
            {/* Start Single Wedget */}
            <div className="col-lg-2 offset-lg-1 col-md-6 col-sm-6 col-12 sm__mt--40 md__mt--40">
              <div className={styles.singleWidget}>
                
                <ul className={styles.ftContactLink}>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "#/"}></Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "#/"}>
                     Course
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/myaccount"}>
                     My account
                    </Link>
                  </li>
                 
                </ul>
              </div>
            </div>
            {/* End Single Wedget */}
            {/* Start Single Wedget */}
            <div className="col-lg-2 offset-lg-1 col-md-6 col-sm-6 col-12 sm__mt--40 md__mt--40">
              <div className={styles.singleWidget}>
               
                

                  <ul className={styles.socialIcon}>
                    <li>
                      <Link to={process.env.PUBLIC_URL + "#/"}>
                        <IoLogoFacebook />
                      </Link>
                    </li>
                    <li>
                      <Link to={process.env.PUBLIC_URL + "#/"}>
                      <IoLogoInstagram />
                      </Link>
                    </li>
                    <li>
                      <Link to={process.env.PUBLIC_URL + "#/"}>
                      <IoLogoLinkedin />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
         
            {/* End Single Wedget */}
          </div>
        </div>
      </div>
    
      <button
        className={`scroll-top ${scroll > top ? "show" : ""}`}
        onClick={() => scrollToTop()}
      >
        <MdExpandLess />
      </button>
    </footer>
  );
};

Footer.propTypes = {
  footerBg: PropTypes.string
};

export default Footer;

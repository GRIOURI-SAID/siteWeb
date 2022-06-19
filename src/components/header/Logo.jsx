import React from "react";
import { Link } from "react-router-dom";


const Logo = () => {
  return (
    <div className="logo">
      <Link to={process.env.PUBLIC_URL + "/"}>
        <h2>Your LOGO</h2> 
      </Link>
    </div>
  );
};

export default Logo;

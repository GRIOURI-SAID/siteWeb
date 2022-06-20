import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts";
import Breadcrumb from "../components/UI/breadcrumb";
import AboutContentOne from "../containers/about-content/AboutContent";





const About = () => {
  return (
    <Fragment>
      <MetaTags>
        <title> About</title>
        <meta
          name="description"
          content=""
        />
      </MetaTags>
      <LayoutOne>
         <AboutContentOne />
           
        


      </LayoutOne>
    </Fragment>
  );
};

export default About;

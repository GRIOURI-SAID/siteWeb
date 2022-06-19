import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts";
import Breadcrumb from "../components/UI/breadcrumb";





const About = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Voopo | About</title>
        <meta
          name="description"
          content=""
        />
      </MetaTags>
      <LayoutOne>
        {/* breadcrumb */}
        <Breadcrumb title="About Us" />




      </LayoutOne>
    </Fragment>
  );
};

export default About;

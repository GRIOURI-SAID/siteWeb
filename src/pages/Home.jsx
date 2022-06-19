import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import Hero from "../components/hero/Hero";
import AboutMe from "../containers/about-me/AboutMe";
import Message from "../containers/message/Message";
import Module from "../containers/module/Module";
import Testimoniats from "../containers/testimonials/Testimoniats";
import LayoutOne from "../layouts";



const HomeOne = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Voopo | Home One</title>
        <meta
          name="description"
          content=""
        />
      </MetaTags>
      <LayoutOne>
     
        <Hero />

        <Testimoniats />

        <Module />

        
        <AboutMe />
        
        <Message />

      </LayoutOne>
    </Fragment>
  );
};

export default HomeOne;

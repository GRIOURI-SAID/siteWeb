import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts";

import ContactForm from "../containers/contact/contact-form";


const Contact = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Voopo | Contact</title>
        <meta
          name="description"
          content=""
        />
      </MetaTags>
      <LayoutOne>
       
        {/* contact form */}
        <ContactForm />
       
  
      </LayoutOne>
    </Fragment>
  );
};

export default Contact;

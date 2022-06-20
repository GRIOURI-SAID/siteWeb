
import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import UserContent from "../containers/users-content/UserContent";
import LayoutOne from "../layouts";

const  User =()  =>{
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
             <UserContent />




          </LayoutOne>
      </Fragment>
  )
}

export default User
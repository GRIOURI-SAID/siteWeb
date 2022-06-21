import React, { Fragment } from 'react'
import { MetaTags } from 'react-meta-tags'

import Bannar from '../containers/bannar/Bannar'
import ModuleContents from '../containers/module/ModuleContent'
import LayoutOne from '../layouts'

function Account() {
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
               <Bannar />

              
             <ModuleContents />


          </LayoutOne>
      </Fragment>
  )
}

export default Account
import React, { Fragment, useEffect, useState } from 'react'
import { MetaTags } from 'react-meta-tags'
import Bannar from '../containers/bannar/Bannar'
import LayoutOne from '../layouts'
import data from "../data/module/module.json"
import {
   
    useParams
} from "react-router-dom";

const DetailsModule = () => {
    let { id } = useParams();
    
        const data2 = data.filter(module => module.id === id.toString())
      
      
    
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
              {data2.map(module =>
                  <div className='container mt-5 text-center'>
                      <h1 className='text-center'>{module.type}</h1>

                      <div className='content'>
                          <p >{ module.content}</p>
                      </div>
                </div>
                  
                )}
          </LayoutOne>
      </Fragment>
  )
}

export default DetailsModule
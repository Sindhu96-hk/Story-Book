import React from 'react'
import SpotSection from './SpotSection'
import {spotObjOne,spotObjTwo} from './content';

function Spottest() {
    return (
        <>
              <SpotSection {...spotObjOne} /> 
             <SpotSection {...spotObjTwo} />  
        </>
    )
}

export default Spottest

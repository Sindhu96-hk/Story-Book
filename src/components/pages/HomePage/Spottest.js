import React from 'react'
import SpotSection from '../../SpotSection'
import {spotObjOne,spotObjTwo} from './Data';

function Spottest() {
    return (
        <>
              <SpotSection {...spotObjOne} /> 
             <SpotSection {...spotObjTwo} />  
        </>
    )
}

export default Spottest

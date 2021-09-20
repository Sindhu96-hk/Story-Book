import React from 'react';
import BuildUi from './BuildUi';
import {buildObjOne,buildObjTwo} from './content';

function Build() {
    return (
        <>
             <BuildUi {...buildObjOne} /> 
             <BuildUi {...buildObjTwo} />  
            
        </>
    )
}

export default Build

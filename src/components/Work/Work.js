import React from 'react';
import WorkFlow from './WorkFlow';
import {workObjOne} from './content1';


function Work() {
    return (
        <>
              <WorkFlow {...workObjOne} />  
             
        </>
    )
}

export default Work

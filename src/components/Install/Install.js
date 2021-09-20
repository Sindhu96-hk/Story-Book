import React from 'react';
import InstallSection from './InstallSection';
import {installObjOne} from './content';


function Install() {
    return (
        <>
             <InstallSection {...installObjOne} />  
                
        </>
    )
}

export default Install


import React from 'react';
import InstallSection from '../../InstallSection';
import {installObjOne} from './Data'


function Install() {
    return (
        <>
             <InstallSection {...installObjOne} />  
                
        </>
    )
}

export default Install


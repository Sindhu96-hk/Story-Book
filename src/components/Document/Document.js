import React from 'react';
import DocumentUi from './DocumentUi';
import {documentObjOne} from './content'


function Document() {
    return (
        <>
             <DocumentUi {...documentObjOne} />  
        </>
    )
}

export default Document

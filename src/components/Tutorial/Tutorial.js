import React from 'react';
import TutorialSection from './TutorialSection';
import {tutorialObjOne} from './content';

function Tutorial() {
    return (
        <div>
             <TutorialSection {...tutorialObjOne} />  
            
        </div>
    )
}

export default Tutorial

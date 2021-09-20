import React from 'react';
import FeedbackSection from './FeedbackSection';
import {feedObjOne,feedObjTwo} from './content';

function Feedback() {
    return (
        <> 
             <FeedbackSection {...feedObjOne} /> 
             <FeedbackSection {...feedObjTwo} />  
            
        </>
    )
}

export default Feedback

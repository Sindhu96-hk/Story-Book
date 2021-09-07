import React from 'react';
import FeedbackSection from '../../FeedbackSection';
import {feedObjOne,feedObjTwo} from './Data';

function Feedback() {
    return (
        <> 
             <FeedbackSection {...feedObjOne} /> 
             <FeedbackSection {...feedObjTwo} />  
            
        </>
    )
}

export default Feedback

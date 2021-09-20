import React from 'react';
import TestimonialSection from './TestimonialSection';
import {testimonialObjOne} from './content';

function Testimonial() {
    return (
        <div>
            <TestimonialSection {...testimonialObjOne} />  
        </div>
    )
}

export default Testimonial

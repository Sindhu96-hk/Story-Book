import React from 'react'
import TestimonialSection from '../../TestimonialSection'
import {testimonialObjOne} from './Data'

function Testimonial() {
    return (
        <div>
            <TestimonialSection {...testimonialObjOne} />  
        </div>
    )
}

export default Testimonial

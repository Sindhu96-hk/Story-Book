import React from 'react';
import { Link } from 'react-router-dom';
import './TestimonialSection1.css';

function TestimonialSection1({lightBg, topLine, lightText, lightTextDesc, headline, description, buttonLabel, buttonLabel1, img, alt, imgStart,}) {
    return (
        <>
             <div className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}>
                <div className="container">
                    <div className="row home__hero-row" >
                        <div className="col heroSec">
                            <div className="home__hero-text-wrapper">
                                <p className={lightTextDesc ? 'home__testimonial-subtitle' : 'home__testimonial-subtitle dark'}>
                                {description}</p>      
                            </div>
                            <div className="testi_img">
                                <img src="images/man.png"></img>
                              
                            </div>
                            <div className="testi-name">
                            <h4>Adam Neary</h4>
                            <p className="testi-para">Tech lead</p>
                            </div>
                        </div>
                      
                    </div>
                </div>
                     
            </div>
            
        </>
    )
}

export default TestimonialSection1

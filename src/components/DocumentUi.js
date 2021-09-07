import React from 'react';
import { Link } from 'react-router-dom';
import './BuildUi.css';
import Video from 'react-responsive-video';


function DocumentUi({lightBg, topLine, lightText, lightTextDesc, headline, description, video, img, alt, imgStart,}) {
    return (
        <>
             <div className={lightBg ? 'home__hero-section1' : 'home__hero-section1 darkBg'}>
                <div className="container">
                    <div className="row home__hero-row">
                        <div className="col">
                             <div className="col work-video">
                                <div className="home__hero-img-wrapper"> 
                                
                                    <Video mp4={video} />
                                </div> 
                            </div>       
                        </div>
                        <div className="home__hero-text-wrapper">
                                <h1 className={lightText ? 'durable' : 'heading dark'}>{headline}</h1>
                                <p className={lightTextDesc ? 'home__durable-subtitle' : 'home__durable-subtitle dark'}>
                                {description}</p>
                        </div>
                    </div>
                </div>
               
            </div>
            
        </>
    )
}

export default DocumentUi

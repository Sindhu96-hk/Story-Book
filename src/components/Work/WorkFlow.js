import React from 'react';
import './WorkFlow.css';
import Video from 'react-responsive-video';

function WorkFlow({lightBg, topLine, lightText, lightTextDesc, headline, description, video, img, alt, imgStart,}) {
    return (
        <>
         <div className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}>
                <div className="container">
                    <div className="row home__hero-row" 
                     >
                        <div className="col">
                            <div className="home__hero-text-wrapper">
                                <h1 className={lightText ? 'durable' : 'heading dark'}>{headline}</h1>
                                <p className={lightTextDesc ? 'home__durable-subtitle' : 'home__durable-subtitle dark'}>
                                {description}</p>
                            </div>
                        </div>
                         <div className="col work-video">
                             <div className="home__hero-img-wrapper"> 
                                <Video mp4={video} />
                             </div> 
                        </div> 
                    </div>
                </div>
               
            </div>
            
        </>
    )
}

export default WorkFlow

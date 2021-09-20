import React from 'react';
import './SpotSection.css';

function SpotSection({lightBg, lightText, lightTextDesc, headline, headline1, description, description1, img, img1, alt, imgStart,}) {
    return (
        <>
            <div className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}>
                
                <div className="container">
                    <div className="row home__hero-row" 
                    style={{display: 'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'}}
                    >
                        <div className="col">
                            <div className="home__hero-text-wrapper">
                            <div className="home__hero-img-wrapper">
                                <img src={img} alt={alt} className="home__hero-img"/>
                            </div>
                                <h1 className={lightText ? 'isolation' : 'heading dark'}>{headline}</h1>
                                <p className={lightTextDesc ? 'home__isolation-subtitle' : 'home__isolation-subtitle dark'}>
                                {description}</p>
                            </div>
                        </div>
                       
                        <div className="col">
                            <div className="home__hero-text-wrapper">
                            <div className="home__hero-img-wrapper">
                                <img src={img1} alt={alt} className="home__hero-img"/>
                            </div>
                                <h1 className={lightText ? 'isolation' : 'heading dark'}>{headline1}</h1>
                                <p className={lightTextDesc ? 'home__isolation-subtitle' : 'home__isolation-subtitle dark'}>
                                {description1}</p>
                            </div>
                        </div>   
                    </div>
                </div>         
            </div>
            <hr></hr>
            
        </>
    )
}

export default SpotSection

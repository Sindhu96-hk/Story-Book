import React from 'react';
import { Button } from '../Button';
import { Link } from 'react-router-dom';
import './HeroSection.css';
import { FaPlay } from 'react-icons/fa';

function HeroSection({lightBg, topLine, lightText, lightTextDesc, headline, description, buttonLabel, buttonLabel1, img, alt, imgStart,}) {
    return (
        <>
            <div className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}>
                <div className="container">
                    <div className="row home__hero-row"
                    style={{display: 'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'}}
                    >
                        <div className="col heroSec">
                            <div className="home__hero-text-wrapper">
                                <div className="top-line">{topLine}</div>
                                <h1 className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                                <p className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>
                                {description}</p>
                                <Link to="/star">
                                    <Button buttonSize='btn--wide' buttonColor='blue'>{buttonLabel}</Button>
                                </Link>
                                <Link to="/star">
                                    <Button buttonSize='btn--wide' buttonColor='red'><FaPlay />{buttonLabel1}</Button>
                                </Link>
                            </div>
                        </div>
                       
                    </div>
                </div>
                     
            </div>
        </>
    );
}

export default HeroSection

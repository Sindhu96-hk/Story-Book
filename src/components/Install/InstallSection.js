import React from 'react';
import { Button } from '../Button';
import { Link } from 'react-router-dom';
import './InstallSection.css';

function InstallSection({lightBg, topLine, lightText, lightTextDesc, headline, buttonLabel, }) {
    return (
        <>
             <div className={lightBg ? 'home__install-section' : 'home__install-section darkBg'}>
                <div className="container">
                    <div className="row home__hero-row">
                        <div className="col heroSec">
                            <div className="home__hero-text-wrapper">
                                <h1 className={lightText ? 'install-heading' : 'heading dark'}>{headline}</h1>
                            </div>
                        </div>
                         <div className="col">
                         <Link to="/star">
                                    <Button buttonSize='btn--wide' buttonColor='blue'>{buttonLabel}</Button>
                                </Link>
                               
                        </div> 
                    </div>
                </div>
                     
            </div>
            <hr></hr>
        </>
    )
}

export default InstallSection

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './TutorialSection.css';


function TutorialSection({lightBg, lightText, lightTextDesc, headline, headline1, description, description1, imgStart,}) {
    const [click, setClick] = useState(false);
    const closeMobileMenu = () => setClick(false);
    return (
        <>
            <div className={lightBg ? 'home__tutorial-section' : 'home__tutorial-section darkBg'}>
                <div className="container">
                    <div className="row home__hero-row"
                    style={{display: 'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'}}
                    >
                        <div className="col heroSec">
                            <div className="home__hero-text-wrapper">
                               
                                <h1 className={lightText ? 'tutorial' : 'heading dark'}><img src="images/book.svg" alt="book" className="tutorial-img"></img>{headline}</h1>
                                <p className={lightTextDesc ? 'home__tutorial-subtitle' : 'home__tutorial-subtitle dark'}>
                                {description}</p>
                               
                            </div>
                            <ul className={click ? 'nav-menu2 active' : 'nav-menu2'}>
                       
                        <li className='nav-item2'>
                            <Link to='/' className='nav-links2' onClick={closeMobileMenu}>
                                React
                            </Link>
                        </li>
                        <li className='nav-item2'>
                            <Link to='/tutorial' className='nav-links2' onClick={closeMobileMenu}>
                                Vue
                            </Link>
                        </li>
                        <li className='nav-item2'>
                            <Link to='/releases' className='nav-links2' onClick={closeMobileMenu}>
                                Angular
                            </Link>
                        </li>
                        <li className='nav-item2'>
                            <Link to='/addons' className='nav-links2' onClick={closeMobileMenu}>
                                Web-Components
                            </Link>
                        </li>            
                    </ul>
                        </div>
                         <div className="col">
                         <div className="home__hero-text-wrapper">
                                
                                <h1 className={lightText ? 'tutorial' : 'heading dark'}><img src="images/direction.svg" alt="direction" className="tutorial-img"></img>{headline1}</h1>
                                <p className={lightTextDesc ? 'home__tutorial-subtitle' : 'home__tutorial-subtitle dark'}>
                                {description1}</p>
                               
                            </div>
                            <ul className={click ? 'nav-menu2 active' : 'nav-menu2'}>
                       
                       <li className='nav-item2'>
                           <Link to='/' className='nav-links2' onClick={closeMobileMenu}>
                               Learn StoryBook Now
                           </Link>
                       </li>
                                  
                   </ul>
                        </div> 
                    </div>
                </div>
                     
            </div>
            
        </>
    )
}

export default TutorialSection

import React from 'react';
// import { Link } from 'react-router-dom';
import ReactPlayer from "react-player";
import "./responsive-player.css";


function ResponsivePlayer() {
    // const [click, setClick] = useState(false);
 
    // const closeMobileMenu = () => setClick(false);
    return (
        <div className="container">
             <div className="row home__hero-row">
                   <div className="col resp-player">
                        {/* <div className="resp-player"> */}
                            <div className='player-wrapper'>
                            <ReactPlayer
                                className= 'react-player'
                                url='images/storybook.mp4'
                                autoPlay='true'
                                controls='controls'
                                height='100%'
                                width='70%'
                                />
                                </div>
                        {/* </div> */}
                      </div>

                      {/* <div className="col resp-link">
                         
                           
                            <ul className={click ? 'resp-menu active' : 'resp-menu'}>
                            <span className="head-3">Made For</span>
                                <li className='resp-item'>
                                    <Link to='/' className='resp-links' onClick={closeMobileMenu}>
                                       <img src="images/logo-react.svg " className="react-logos" alt="react"/> React
                                    </Link>
                                </li>
                                <li className='resp-item'>
                                    <Link to='/' className='resp-links' onClick={closeMobileMenu}>
                                    <img src="images/logo-vue.svg " className="react-logos" alt="vue"/> Vue
                                    </Link>
                                </li>
                                <li className='resp-item'>
                                    <Link to='/' className='resp-links' onClick={closeMobileMenu}>
                                    <img src="images/logo-angular.svg " className="react-logos" alt="angular"/>Angular 
                                    </Link>
                                </li>
                                <li className='resp-item'>
                                    <Link to='/' className='resp-links' onClick={closeMobileMenu}>
                                    <img src="images/logo-web-components.svg " className="react-logos" alt="angular"/> Web Components 
                                    </Link>
                                </li>
                                <li className='resp-item'>
                                    <Link to='/' className='resp-links' onClick={closeMobileMenu}>
                                    <img src="images/logo-ember.svg " className="react-logos" alt="angular"/>  Ember
                                    </Link>
                                </li>
                                <li className='resp-item'>
                                    <Link to='/' className='resp-links' onClick={closeMobileMenu}>
                                    <img src="images/logo-html.svg " className="react-logos" alt="angular"/> HTML 
                                    </Link>
                                </li>
                                <li className='resp-item'>
                                    <Link to='/' className='resp-links' onClick={closeMobileMenu}>
                                    <img src="images/logo-mithril.svg " className="react-logos" alt="mithril"/> Mithril 
                                    </Link>
                                </li>
                                <li className='resp-item'>
                                    <Link to='/' className='resp-links' onClick={closeMobileMenu}>
                                    <img src="images/logo-marko.svg " className="react-logos" alt="marko"/> Marko 
                                    </Link>
                                </li>
                                <li className='resp-item'>
                                    <Link to='/' className='resp-links' onClick={closeMobileMenu}>
                                    <img src="images/logo-svelte.svg " className="react-logos" alt="svelte"/> Svelte 
                                    </Link>
                                </li>
                                <li className='resp-item'>
                                    <Link to='/' className='resp-links' onClick={closeMobileMenu}>
                                    <img src="images/logo-riot.svg " className="react-logos" alt="riot"/> Riot 
                                    </Link>
                                </li>
                                <li className='resp-item'>
                                    <Link to='/' className='resp-links' onClick={closeMobileMenu}>
                                    <img src="images/logo-preact.svg " className="react-logos" alt="preact"/> Preact 
                                    </Link>
                                </li>
                                <li className='resp-item'>
                                    <Link to='/' className='resp-links' onClick={closeMobileMenu}>
                                    <img src="images/logo-rax.png " className="react-logos" alt="rax"/> Rax 
                                    </Link>
                                </li>
                                <span className="head-3">GitHub</span>
                                <li className='resp-item'>
                                    <Link to='/' className='Git-links' onClick={closeMobileMenu}>
                                    v6.3
                                    </Link>
                                    <p className="git-head">Latest version</p>
                                </li>
                                <li className='resp-item'>
                                    <Link to='/' className='blue-links' onClick={closeMobileMenu}>
                                    10.91m
                                    </Link>
                                    <p className="git-head">Install per month</p>
                                </li>
                                <li className='resp-item'>
                                    <Link to='/' className='Green-links' onClick={closeMobileMenu}>
                                    1290+
                                    </Link>
                                    <p className="git-head">Contributor</p>
                                </li>
                            </ul>
                         
                      </div> */}
                
            </div>
            <div className="row">
                <div className="col main-img">
                    <img src="images/github.svg" className="image-sec" alt="github"/>
                    <img src="images/dropbox.svg" className="image-sec" alt="dropbox" />
                    <img src="images/airbnb.svg" className="image-sec" alt="airbnb" />
                    <img src="images/jetbrains.svg" className="image-sec" alt="jetbrains" />
                    <img src="images/lyft.svg" className="image-sec" alt="lyft"/>
                    <img src="images/mozilla.svg" className="image-sec" alt="mozilla" />
                    <hr></hr>
                </div>   
            </div>
           
         </div>
         
        
    )
}

export default ResponsivePlayer;
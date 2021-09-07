import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdFingerprint} from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from './Button';
import './Navbar.css';


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        }else{
            setButton(true)
        }
    }

    window.addEventListener('resize', showButton);

    return (
        <>
            <div className="navbar">
                <div className="navbar-container container">
                    <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                        {/* <MdFingerprint className='navbar-icon' /> */}
                        <img src="images/storybook.svg" alt=""/>
                    </Link>
                    <div className="menu-icon" onClick={handleClick} >
                         {click ? <FaTimes /> : <FaBars />}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Doc
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/tutorial' className='nav-links' onClick={closeMobileMenu}>
                                Tutorials
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/releases' className='nav-links' onClick={closeMobileMenu}>
                                Releases
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/addons' className='nav-links' onClick={closeMobileMenu}>
                                Addons
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/blog' className='nav-links' onClick={closeMobileMenu}>
                                Blog
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/community' className='nav-links' onClick={closeMobileMenu}>
                                Community
                            </Link>
                        </li>
                        <li className='nav-btn'>
                            {button ? (
                                <Link to='/star' className='btn-link' >
                                    <Button buttonStyle='btn--outline'>Star</Button>
                                </Link>
                            ) :(
                                <Link to='/star' className='btn-link' onClick={closeMobileMenu}>
                                    <Button buttonStyle='btn--outline' 
                                            buttonSize='btn--mobile'>
                                        Star
                                    </Button>
                                </Link>
                            )
                            }
                        </li>
                        <li className='nav-btn'>
                            {button ? (
                                <Link to='/64160' className='btn-link'>
                                    <Button buttonStyle='btn--outline'>64160</Button>
                                </Link>
                            ) :(
                                <Link to='/64160' className='btn-link'  onClick={closeMobileMenu}>
                                    <Button buttonStyle='btn--outline' 
                                            buttonSize='btn--mobile'>
                                        64160
                                    </Button>
                                </Link>
                            )
                            }
                        </li>
                    </ul>
                 </div>
            </div>
        </>
    )
}

export default Navbar

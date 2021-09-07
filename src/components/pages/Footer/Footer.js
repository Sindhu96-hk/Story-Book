import React from 'react';
import './Footer.css';
import { Button } from '../../Button';
import { Link } from 'react-router-dom';
import { MdFingerprint } from 'react-icons/md';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
              <img src="images/storybook.svg"></img>
            {/* <h2>About Us</h2> */}
            <p className="footer-subscription-text">The MIT License (MIT). Website design by @domyen and the awesome Storybook community.</p>
          </div>
          <div className='footer-link-items'>
            <h2>Storybook</h2>
            <Link to='/'>Docs</Link>
            <Link to='/'>Tutorial</Link>
            <Link to='/'>Releases</Link>
            <Link to='/'>Addons</Link>
            <Link to='/'>Blog</Link>
            <Link to='/'>Get involved</Link>
            <Link to='/'>Use cases</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Team</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Community</h2>
            <Link to='/'>Github</Link>
            <Link to='/'>Twitter</Link>
            <Link to='/'>Discord chat</Link>
            <Link to='/'>Youtube</Link>
          </div>
          <div className='footer-link-items '>
          <h2>Subscribe</h2>
          <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
            <div className='input-areas'>
                    <form>
                        <input
                        className='footer-input'
                        name='email'
                        type='email'
                        placeholder='Your Email'
                        />
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
            </div>
          </div>
        </div>
      </div>
     
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
              <small className="website-rights"><p>Maintained by</p></small>
            <Link to='/' className='social-logo'>
              <img src="images/cromatic.svg" height="40px"/ >
              
            </Link>
          </div>
          <div className='footer-logo'>
          <small className='website-rights'>
               <p>Continuous integration by</p> 
               <img src="images/circle.svg"  height="40px"/>
           </small>
           </div>
           <div className='footer-logo'>
           <small className='website-rights'>  <p>Hosting by</p></small> 
          <img src="images/netlify.svg"  height="40px"/>
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;

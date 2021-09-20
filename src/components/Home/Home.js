import React from 'react';
import HeroSection from './HeroSection';
import {homeObjOne} from './content';

const Home = () => {
    return(
        <div>
             <HeroSection {...homeObjOne} />
        </div>
    )
}

export default Home

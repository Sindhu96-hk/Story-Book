import React from 'react'
import HeroSection from '../../HeroSection'

import {homeObjOne} from './Data'

// function Home() {
//     return (
//         <>
//             <HeroSection {...homeObjOne} />  
                
//         </>
//     )
// }

const Home = () => {
    return(
        <div>
             <HeroSection {...homeObjOne} />
        </div>
    )
}

export default Home

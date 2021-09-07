import React from 'react'
import TestSection from '../../TestSection'
import {testObjOne} from './Data'

function Test() {
    return (
        <div>
            <TestSection {...testObjOne} />  
        </div>
    )
}

export default Test

import * as React from 'react'
import Greeting from '../components/Greeting'

const SayHello = () => {
    return (
        <div>
            <Greeting name = 'Maggie'/>
            <Greeting name = 'Emma'/>
            <Greeting name = 'Brandon'/>
        </div>
    )
}
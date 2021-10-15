import React from 'react'

import Heading from './Heading';
import Para from "./Para"
import Miniproject1 from "./Miniproject1"
import { add, sub, name, mul, Div } from "./Calcualtor"



const App = () => {
    return (
        <>
            <Heading />
            <Para />
            <Miniproject1 />

            <h1>the sum of two numbvers {add(5, 10)}</h1>
            <h1>the sum of two numbvers {sub(5, 10)}</h1>
            <h1>the sum of two numbvers {mul(5, 10)}</h1>
            <h1>the sum of two numbvers {Div(5, 10)}</h1>
            <p>{name}</p>


        </>
    )
}

export default App

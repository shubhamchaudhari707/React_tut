import React, { useContext } from 'react'
import {Biodata} from "./UsetextA"

const UsetextC = ({ name, Degree }) => {
    const data = useContext(Biodata)
    return (
        <div>
            <h1>{name}</h1>
            <h1>{Degree}</h1>
            <h1>{data}</h1>
        </div>
    )
}

export default UsetextC

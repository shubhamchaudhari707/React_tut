import React, { useContext } from 'react'
import { biodata } from './CompA'

const CompC = ({ name }) => {

    const context = useContext(biodata)

    return (
        <>
            <h1>Compenent C {context} </h1>
        </>
    )
}

export default CompC

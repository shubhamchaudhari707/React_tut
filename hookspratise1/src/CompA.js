import React, { createContext } from 'react'
import CompB from './CompB'

const biodata = createContext()

const CompA = () => {
    return (
        <>
            {/* <CompB name="shubahm Rock" /> */}

            <biodata.Provider value={"shubahm Rocks"} >
                <CompB />
            </biodata.Provider>
        </>
    )
}

export default CompA
export { biodata }

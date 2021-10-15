import React, { createContext } from 'react'
import UsetextB from "./UsetextB"

const Biodata = createContext()

const UsetextA = () => {

    return (

        <Biodata.Provider value={"fullstack developer"}>

            <>

                <UsetextB
                    name={"shubham Chaudhari mechchnical"}
                    Degree={"Beacholour of Mechnical Enginnering"}
                />


            </>

        </Biodata.Provider>


    )
}
export default UsetextA
export { Biodata }

import React, { useState } from 'react'

const Events = () => {

    let purple = "purple"
    const [name, setname] = useState('Click Me ')
    let [bg, setbg] = useState(purple)

    const myfunction = () => {

        if (bg == purple) {
            setbg("red")
            setname('hyllo')
        }
        else {
            setbg("purple")
            setname('Click Me ')
        }
    }

    return (
        <>
            <div style={{ backgroundColor: bg }}>

                <button onClick={myfunction}> {name} </button>
            </div>
        </>
    )
}

export default Events
